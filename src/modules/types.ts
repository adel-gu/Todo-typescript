type Task = {
  id: number,
  title: string,
  completed: boolean
}

const elementDivClasses: string[] = ["task-item-content", "flex", "justify-between", "items-center", "h-10", "px-2", "bg-slate-800", "border-slate-500", "border-b"]

const elementDeletBtnClasses: string[] = ["deleteBtn", "text-red-500", "active:text-slate-700"]

const elementCheckBoxClasses: string[] = ["accent-pink-500", "rounded", "w-4", "h-4", "focus:ring-pink-500", "focus:focus:ring-2", "cursor-pointer"]

const elementTitleClasses: string[] = ["w-full"]
const elementTitleCompletedClasses: string[] = ["line-through", "text-slate-500"]

const elementCheckTitleDivClasses: string[] = ["flex", "gap-3", "items-center", "grow"]


export { elementDivClasses, elementDeletBtnClasses, elementCheckBoxClasses, elementCheckTitleDivClasses, elementTitleClasses, elementTitleCompletedClasses }
export default Task