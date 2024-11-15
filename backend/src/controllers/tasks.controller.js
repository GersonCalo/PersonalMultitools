import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id }).populate("user");
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { title, description, date } = req.body;
  const newTask = new Task({ title, description, date, user: req.user.id });
  await newTask.save();
  res.json(newTask);
};

export const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id).Populate("user");
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
};

export const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ error: "Task not found" });
  return res.sendStatus(204);
};

export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
};
