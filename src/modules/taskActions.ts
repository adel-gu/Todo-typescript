import { tasksFromLS ,refreshLocalStorageTasks } from "./localstorage"
import { addTaskItemToTasks, deleteTaskItemFromTasks, setCompleteTask, updateEditedTask } from "./taskServices"
import { renderTasks } from "./taskRendering"
import Task from "./types"

// Form => creates Task and render the task UI
const addAction = (form: HTMLFormElement, tasksContainer: HTMLUListElement) => {
  form?.addEventListener("submit", (e) => {
    e.preventDefault()
    // Get tasks
    let tasks = tasksFromLS()

    // Get form input value
    const formData = new FormData(form)
    const taskTitle = Object.fromEntries(formData).title.toString()

    // Check if input is empty
    if (taskTitle === "" || taskTitle === " ") return

    // Create task of type Task
    const taskId = tasks.length

    // Update tasks array
    tasks = addTaskItemToTasks(tasks, taskTitle, taskId)

    sharedActions(tasks, tasksContainer)
    form.reset()
  })
}

const deleteAction = (deleteBtn: HTMLButtonElement, tasksContainer: HTMLUListElement) => {
  let tasks = tasksFromLS()
  // Get task Id from the pressed button
  const taskId = Number(deleteBtn.dataset["id"])

  // Delete the task from the array
  tasks = deleteTaskItemFromTasks(tasks, taskId)

  sharedActions(tasks, tasksContainer)
}

// Check a task
const completeAction = (checkbox: HTMLInputElement, tasksContainer: HTMLUListElement) => {
  let tasks = tasksFromLS()
  const taskId = Number(checkbox.dataset["id"])
  tasks = setCompleteTask(taskId, tasks)

  sharedActions(tasks, tasksContainer)
}

// Check a task
const editAction = (taskP: HTMLParagraphElement, tasksContainer: HTMLUListElement) => {
  let tasks = tasksFromLS()
  const taskId = Number(taskP.dataset["id"])
  const taskTitle = taskP.textContent as string
  tasks = updateEditedTask(taskId, taskTitle, tasks)

  // Refresh the array in localstorage
  refreshLocalStorageTasks(tasks)
}

const sharedActions = (tasks: Task[], tasksContainer: HTMLUListElement) => {
  // Empty container
  tasksContainer.innerHTML = ""

  // Render tasks to the dom
  renderTasks(tasks, tasksContainer)

  // Refresh the array in localstorage
  refreshLocalStorageTasks(tasks)
}

export { addAction, deleteAction, completeAction, editAction }