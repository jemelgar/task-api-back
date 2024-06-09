const express = require('express');
const {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasksController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware);
router.get('/', getTasks);
router.post('/', addTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
