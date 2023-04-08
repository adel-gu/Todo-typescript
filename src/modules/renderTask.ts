import { Task } from "./types"

const createTaskElement = (taskTitle: string): HTMLLIElement => {
  const taskItem = document.createElement("li")
  taskItem.classList.add("task-item")
  taskItem.setAttribute("data-id", "1")

  const taskItemContent = document.createElement("div")
  taskItemContent.classList.add("task-item-content flex justify-between items-center h-10 px-2 bg-slate-800 border-slate-500 border-b")

  const title = document.createElement("p")
  title.textContent = taskTitle

  const deleteBtn = document.createElement("button")
  deleteBtn.textContent = "Delete"
  deleteBtn.classList.add("text-red-500 active:text-slate-700")

  // Append childes
  taskItem.appendChild(taskItemContent)
  taskItemContent.appendChild(title)
  taskItemContent.appendChild(deleteBtn)

  return taskItem
}

// Rrenders Tasks
const renderTasks = (tasks: Task[], tasksContainer: HTMLUListElement) => {
  tasks.forEach(task => tasksContainer.innerHTML += createTaskElement(task.title))
}

export default renderTasks