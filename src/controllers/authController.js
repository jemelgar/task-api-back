const User = require('../models/userModel');
const { validateEmail, validatePassword } = require('../utils/validate');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !validateEmail(email) ||
    !validatePassword(password)
  ) {
    return res.status(400).send('Invalid input');
  }

  //Verificar si el email no ha sido registrado anteriormente
  const repeatedEmail = await User.findOne({ email: email });
  if (repeatedEmail) {
    console.log(repeatedEmail);
    res.status(400).send({ ok: false, errMsg: 'Email already taken' });
  } else {
    try {
      const user = new User({ firstName, lastName, email, password });
      await user.save();

      //revisamos el usuario guardado para generar un jwt y mandarlo al front
      const userSaved = await User.findOne({ email });
      const token = jwt.sign({ userId: userSaved._id }, 'secretKey');

      res.status(201).send({ ok: true, jwt: token });

      // res.status(201).send('{"resp": "User Saved ❤️" }');
    } catch (error) {
      console.error('Something went wrong ', error);
      res.status(400).send(`Algo salió mal ${error.message}`);
    }
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || password !== user.password) {
    return res.status(401).send('Invalid credentials');
  }
  const token = jwt.sign({ userId: user._id }, 'secretKey');
  res.send({ jwt: token });
};

const getProfile = async (req, res) => {
  console.log(req.headers);

  try {
    const token = req.headers.auth;
    const decoded = jwt.verify(token, 'secretKey');
    const user = await User.findById(decoded.userId).select('-password');
    res.send(user);
  } catch (error) {
    res.status(401).send('Unauthorized' + JSON.stringify(req.headers));
  }
};
module.exports = { register, login, getProfile };
