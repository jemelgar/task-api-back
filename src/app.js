const path = require('path');
const cors = require('cors');
const express = require('express');
const swaggerJSdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const { connectDB } = require('./config');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const PORT = process.env.PORT || 3000;
const app = express();

// swagger definition
const swaggerSpec = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CTD Front II API',
      version: '1.0.0',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: [`${path.join(__dirname, './routes/*')}`],
};

//DATABASE
connectDB();

//GLOBAL MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(
  '/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(swaggerJSdoc(swaggerSpec))
);

//ROUTES

app.use('/api/v1/users', authRoutes);
app.use('/api/v1/tasks', taskRoutes);

//RUN SERVER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
