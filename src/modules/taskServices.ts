import { Task } from "./types"

// Add Task Item
const addTaskItemToTasks = (tasks: Task[], title: string, id: number): Task[] => {
  const task: Task = {
    title,
    id
  }
  tasks.push(task)
  return tasks
}

// Delete Task Item
const deleteTaskItemFromTasks = (tasks: Task[], taskId: number): Task[] => {
  tasks = tasks.filter(task => task.id !== taskId)
  return tasks
}

export { addTaskItemToTasks, deleteTaskItemFromTasks }