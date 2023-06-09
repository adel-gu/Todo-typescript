import * as Styles from "./types"
import Task from "./types"

// Add classes to an html element
const addElementClasses = (classesArr: string[], htmlElement: HTMLElement) => {
  classesArr.forEach(classStr => htmlElement.classList.add(classStr))
}

// Create the html element for the task
const createTaskElement = (taskId: number, taskTitle: string, taskCompleted: boolean): HTMLLIElement => {
  const taskItem = document.createElement("li")
  taskItem.classList.add("task-item")

  const taskItemContent = document.createElement("div")
  addElementClasses(Styles.elementDivClasses, taskItemContent)

  const check = document.createElement("input")
  check.type = "checkbox"
  check.checked = taskCompleted
  addElementClasses(Styles.elementCheckBoxClasses, check)
  check.setAttribute("data-id", `${taskId}`)

  const title = document.createElement("p")
  title.textContent = taskTitle
  addElementClasses(Styles.elementTitleClasses, title)
  if (taskCompleted) addElementClasses(Styles.elementTitleCompletedClasses, title)
  title.setAttribute("data-id", `${taskId}`)
  title.setAttribute("contenteditable", "true")

  const checkTitleContainer = document.createElement("div")
  addElementClasses(Styles.elementCheckTitleDivClasses, checkTitleContainer)
  checkTitleContainer.appendChild(check)
  checkTitleContainer.appendChild(title)

  const deleteBtn = document.createElement("button")
  deleteBtn.textContent = "Delete"
  addElementClasses(Styles.elementDeletBtnClasses, deleteBtn)
  deleteBtn.setAttribute("data-id", `${taskId}`)

  // Append childes
  taskItem.appendChild(taskItemContent)
  taskItemContent.appendChild(checkTitleContainer)
  taskItemContent.appendChild(deleteBtn)
  return taskItem
}

// Rrenders Tasks
const renderTasks = (tasks: Task[], tasksContainer: HTMLUListElement) => {
  tasks.forEach(task => tasksContainer.appendChild(createTaskElement(task.id, task.title, task.completed)))
}

export { renderTasks }