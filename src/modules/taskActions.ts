import { tasksFromLS ,refreshLocalStorageTasks } from "./localstorage"
import { addTaskItemToTasks, deleteTaskItemFromTasks, setCompleteTask } from "./taskServices"
import { renderTasks } from "./taskRendering"

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

    // Empty tasks container
    tasksContainer.innerHTML = ""

    // Render tasks
    renderTasks(tasks, tasksContainer)
    refreshLocalStorageTasks(tasks)
    form.reset()
  })
}

const deleteAction = (deleteBtn: HTMLButtonElement, tasksContainer: HTMLUListElement) => {
  let tasks = tasksFromLS()
  // Get task Id from the pressed button
  const taskId = Number(deleteBtn.dataset["id"])

  // Delete the task from the array
  tasks = deleteTaskItemFromTasks(tasks, taskId)

  // Empty the tasks dom container
  tasksContainer.innerHTML = ""

  // Render tasks to the dom
  renderTasks(tasks, tasksContainer)

  // Refresh the array in localstorage
  refreshLocalStorageTasks(tasks)
}

// Check a task
const completeAction = (checkbox: HTMLInputElement, tasksContainer: HTMLUListElement) => {
  let tasks = tasksFromLS()
  const taskId = Number(checkbox.dataset["id"])
  tasks = setCompleteTask(taskId, tasks)

  // Empty container
  tasksContainer.innerHTML = ""

  // Render tasks to the dom
  renderTasks(tasks, tasksContainer)

  // Refresh the array in localstorage
  refreshLocalStorageTasks(tasks)
}

export { addAction, deleteAction, completeAction }