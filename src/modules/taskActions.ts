import { renderTasks } from "./taskRendering"
import { addTaskItemToTasks } from "./taskServices"
import { Task } from "./types"

let tasks: Task[] = []

// Form => creates Task and render the task UI
const addAction = (form: HTMLFormElement, tasksContainer: HTMLUListElement) => {
  form?.addEventListener("submit", (e) => {
    e.preventDefault()

    // Check if input is empty
    const taskTitle: string = form.title.value
    if (taskTitle === "" || taskTitle === " ") return

    // Create task of type Task
    const taskId: number = tasks.length

    tasks = addTaskItemToTasks(tasks, taskTitle, taskId)
    tasksContainer.innerHTML = ""
    renderTasks(tasks, tasksContainer)
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