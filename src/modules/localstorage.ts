import Task from "./types"

// get from localstorage for task if its null set it
const tasksFromLS = (): Task[] => {
  const tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]")
  return tasks
}

// Refresh the tasks array in localstorage after each action
const refreshLocalStorageTasks = (tasks: Task[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

export { refreshLocalStorageTasks, tasksFromLS }