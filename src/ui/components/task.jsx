import { h } from "../../h"

export function TaskCard({ task, forEdition = false, key}) {
  let button = <button className="task-checkbox"></button>

  let name = (
    <a className="task-name" href={`./taskDetail.html?task_id=${task.id}&key=${key}`}>
      {task.name}
    </a>
  )

  if (forEdition) {
    name = <input type="text" className="form-input" name="name" id="name" value={task.name}/>
  }

  if (task.completed) {
    name.style.textDecoration = "line-through"
    button.style.backgroundColor = "var(--main-color)"
    button.innerHTML = `<span class="fa-solid fa-check"></span>`
    button.style.border = "none"
  }

  return (
    <ol className={`tasks task${task.id}`}>
      {button}
      {name}
    </ol>
  )
}
