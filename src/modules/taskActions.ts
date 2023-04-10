import { renderTasks } from "./taskRendering"
import { addTaskItemToTasks, deleteTaskItemFromTasks } from "./taskServices"
import { Task } from "./types"

let tasks: Task[] = []

// Form => creates Task and render the task UI
const addAction = (form: HTMLFormElement, tasksContainer: HTMLUListElement) => {
  form?.addEventListener("submit", (e) => {
    e.preventDefault()

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
    form.reset()
  })
}

const deleteAction = (deleteBtn: HTMLButtonElement, tasksContainer: HTMLUListElement) => {
  const taskId = Number(deleteBtn.dataset["id"])
  tasks = deleteTaskItemFromTasks(tasks, taskId)
  tasksContainer.innerHTML = ""
  renderTasks(tasks, tasksContainer)
}

export { addAction, deleteAction }