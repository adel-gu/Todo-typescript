type Task = {
  id: number,
  title: string
}

const elementDivClasses: string[] = ["task-item-content", "flex", "justify-between", "items-center", "h-10", "px-2", "bg-slate-800", "border-slate-500", "border-b"]

const elementDeletBtnClasses: string[] = ["deleteBtn", "text-red-500", "active:text-slate-700"]

const elementCheckBoxClasses: string[] = ["accent-pink-500", "rounded", "w-4", "h-4", "focus:ring-pink-500", "focus:focus:ring-2"]


export { Task, elementDivClasses, elementDeletBtnClasses, elementCheckBoxClasses }