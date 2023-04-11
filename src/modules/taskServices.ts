import Task from "./types"

// Add Task Item
const addTaskItemToTasks = (tasks: Task[], title: string, id: number): Task[] => {
  const task: Task = {
    title,
    id,
    completed: false
  }
  tasks.push(task)
  return tasks
}

// Delete Task Item
const deleteTaskItemFromTasks = (tasks: Task[], taskId: number): Task[] => {
  tasks = tasks.filter(task => task.id !== taskId)
  updateTaskId(tasks)
  return tasks
}

// Completed Task
const setCompleteTask = (taskId: number, tasks: Task[]): Task[] => {
  return tasks.map(task => {
    if (task.id === taskId) task.completed = true
    return task
  })
}

// Update task id
const updateTaskId = (tasks: Task[]) => {
  tasks.map(task => task.id = tasks.indexOf(task))
}

export { addTaskItemToTasks, deleteTaskItemFromTasks, setCompleteTask }