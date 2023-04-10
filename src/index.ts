import { addAction, deleteAction } from "./modules/taskActions"

const form = document.querySelector("form") as HTMLFormElement
const taskContainer = document.querySelector(".task-list") as HTMLUListElement

addAction(form, taskContainer)

document.addEventListener("click", () => {
  if (document.activeElement?.classList.contains("deleteBtn")) {
    const deleteBtn = document.activeElement as HTMLButtonElement
    deleteAction(deleteBtn, taskContainer)
  }
})

