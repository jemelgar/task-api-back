const Task = require('../models/taskModel');

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.userId });
    tasks.length ? res.send(tasks) : res.send('There are no tasks');
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

const addTask = async (req, res) => {
  const { description } = req.body;
  if (!description) return res.status(401).send('Debes poner una descripción');
  const newTask = new Task({ description, userId: req.user.userId });
  try {
    const task = await newTask.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  try {
    const task = await Task.findByIdAndUpdate(id, { completed }, { new: true });
    res.send(task);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.findByIdAndDelete(id);
    res.send('Tarea borrada');
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

module.exports = { getTasks, addTask, updateTask, deleteTask };
