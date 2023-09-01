import { TaskModel } from '../models/task.js'

export const getAllTasks = (req, res) => {
  const tasks = TaskModel.getAllTasks()
  res.json(tasks)
}

export const addTask = (req, res) => {
  const description = req.body.description
  const task = TaskModel.addTask(description)
  res.json(task)
}

export const deleteTask = (req, res) => {
  const id = parseInt(req.params.id)
  TaskModel.deleteTask(id)
  res.json({ message: 'Deleted successfully' })
}
