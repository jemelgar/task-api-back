const express = require('express');
const {
  greetUser,
  register,
  login,
  getProfile,
} = require('../controllers/authController');
const router = express.Router();

router.get('/list', greetUser);

router.post('/', register);
router.post('/login', login);
router.get('/profile', getProfile);

module.exports = router;
