const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectDB } = require('./config');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const PORT = process.env.PORT || 3000;
const app = express();

//DATABASE
connectDB();

//GLOBAL MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

//ROUTES
app.use('/api/v1/user', authRoutes);
app.use('/api/v1/task', taskRoutes);

//RUN SERVER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
