type Task = {
  id: number,
  title: string
}

const elementDivClasses: string[] = ["task-item-content", "flex", "justify-between", "items-center", "h-10", "px-2", "bg-slate-800", "border-slate-500", "border-b"]

const elementDeletBtnClasses: string[] = ["text-red-500", "active:text-slate-700"]


export { Task, elementDivClasses, elementDeletBtnClasses }