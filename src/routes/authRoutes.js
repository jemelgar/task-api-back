const express = require('express');
const {
  register,
  login,
  getProfile,
} = require('../controllers/authController');
const router = express.Router();

/**
 * @swagger
 * /api/v1/users:
 *   post:
 *     summary: Register user
 *     description: Register user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Success, returns a JWT
 *       400:
 *         description: Bad Request, incorrect data or email already taken
 *       500:
 *         description: Internal Server Error
 */
router.post('/', register);

/**
 * @swagger
 * /api/v1/users/login:
 *   post:
 *     summary: Log in a user
 *     description: Log in using email and password
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserLogin'
 *     responses:
 *       200:
 *         description: Successfully logged in, returns a JWT
 *       400:
 *         description: Bad Request, incorrect data or authentication failed
 *       500:
 *         description: Internal Server Error
 */
router.post('/login', login);

/**
 * @swagger
 * /api/v1/users/getMe:
 *   get:
 *     summary: Get logged-in user information
 *     description: Retrieves user information if a valid JWT is present in the Authorization header
 *     tags:
 *       - Users
 *     parameters:
 *       - in: header
 *         name: auth
 *         required: true
 *         schema:
 *           type: string
 *         description: JWT token
 *     responses:
 *       200:
 *         description: Successfully retrieved user information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserInfo'
 *       401:
 *         description: Unauthorized, JWT not provided, expired, or invalid
 *       500:
 *         description: Internal Server Error
 */
router.get('/getMe', getProfile);

module.exports = router;
