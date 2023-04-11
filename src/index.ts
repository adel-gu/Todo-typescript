import { tasksFromLS } from "./modules/localstorage"
import { addAction, completeAction, deleteAction, editAction } from "./modules/taskActions"
import { renderTasks } from "./modules/taskRendering"
import Task from "./modules/types"

const form = document.querySelector("form") as HTMLFormElement
const taskContainer = document.querySelector(".task-list") as HTMLUListElement

// Render tasks
document.addEventListener("DOMContentLoaded", () => {
  const tasks: Task[] = tasksFromLS()
  renderTasks(tasks, taskContainer)
})

// Add task action
addAction(form, taskContainer)

// remove task action
document.addEventListener("click", () => {
  if (document.activeElement?.classList.contains("delete-btn")) {
    const deleteBtn = document.activeElement as HTMLButtonElement
    deleteAction(deleteBtn, taskContainer)
  }
})

// Complete/Edit Task
document.addEventListener("input", () => {
  if (document.activeElement?.classList.contains("check-completed")) {
    const checkbox = document.activeElement as HTMLInputElement
    completeAction(checkbox, taskContainer)
  }

  if (document.activeElement?.classList.contains("task-title")) {
    const taskP = document.activeElement as HTMLParagraphElement
    editAction(taskP, taskContainer)
  }
})