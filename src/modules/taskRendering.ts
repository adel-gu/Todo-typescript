import { Task, elementDivClasses, elementDeletBtnClasses } from "./types"

const addElementClasses = (classesArr: string[], htmlElement: HTMLElement) => {
  classesArr.forEach(classStr => htmlElement.classList.add(classStr))
}

const createTaskElement = (taskId: number, taskTitle: string): HTMLLIElement => {
  const taskItem = document.createElement("li")
  taskItem.classList.add("task-item")
  taskItem.setAttribute("data-id", `${taskId}`)

  const taskItemContent = document.createElement("div")
  addElementClasses(elementDivClasses, taskItemContent)

  const title = document.createElement("p")
  title.textContent = taskTitle

  const deleteBtn = document.createElement("button")
  deleteBtn.textContent = "Delete"
  addElementClasses(elementDeletBtnClasses, deleteBtn)

  // Append childes
  taskItem.appendChild(taskItemContent)
  taskItemContent.appendChild(title)
  taskItemContent.appendChild(deleteBtn)
  return taskItem
}

// Rrenders Tasks
const renderTasks = (tasks: Task[], tasksContainer: HTMLUListElement) => {
  tasks.forEach(task => tasksContainer.appendChild(createTaskElement(task.id, task.title)))
}

export { renderTasks }