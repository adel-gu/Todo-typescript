import { renderTasks } from "./taskRendering"
import { addTaskItemToTasks } from "./taskServices"
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

    // Render tasks
    renderTasks(tasks, tasksContainer)
    form.reset()
  })
}

// const deleteAction = (deleteBtn: HTMLButtonElement, tasksContainer: HTMLUListElement) => {
//   form?.addEventListener("submit", (e) => {
//     e.preventDefault()

//     // Check if input is empty
//     const taskTitle: string = form.title.value
//     if (taskTitle === "" || taskTitle === " ") return

//     // Create task of type Task
//     const taskId: number = tasks.length
//     addTaskItemToTasks(tasks, taskTitle, taskId)
//     renderTasks(tasks, tasksContainer)
//   })
// }

export { addAction }