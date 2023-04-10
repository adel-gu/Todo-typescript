import { Task } from "./types"

// Set a localstorage for task if its null
const setLocalStorageTasks = (): Task[] => {
  const tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]")
  return tasks
}

// Refresh the tasks array in localstorage after each action
const refreshLocalStorageTasks = (tasks: Task[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

export { refreshLocalStorageTasks, setLocalStorageTasks }