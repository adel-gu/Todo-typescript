import { addAction } from "./modules/taskActions"

const form = document.querySelector("form") as HTMLFormElement
const taskContainer = document.querySelector(".task-list") as HTMLUListElement

addAction(form, taskContainer)