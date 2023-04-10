import { setLocalStorageTasks } from "./modules/localstorage"
import { addAction, deleteAction } from "./modules/taskActions"
import { renderTasks } from "./modules/taskRendering"
import { Task } from "./modules/types"

const form = document.querySelector("form") as HTMLFormElement
const taskContainer = document.querySelector(".task-list") as HTMLUListElement
const tasks: Task[] = setLocalStorageTasks()

// Render tasks
renderTasks(tasks, taskContainer)

// Add task action
addAction(form, taskContainer, tasks)

// remove task action
document.addEventListener("click", () => {
  if (document.activeElement?.classList.contains("deleteBtn")) {
    const deleteBtn = document.activeElement as HTMLButtonElement
    deleteAction(deleteBtn, taskContainer, tasks)
  }
})

