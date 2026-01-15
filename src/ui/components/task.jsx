import { h } from "../../h"
import styles from "./styles/task.module.css"

/**
 * Componente TaskCard
 * -------------------
 * Renderiza um cartão representando uma tarefa individual.
 *
 * Estrutura:
 * - Exibe um botão de checkbox para marcar a tarefa como concluída.
 * - Exibe o nome da tarefa:
 *   - Se `forEdition` for `false`, mostra como link que leva ao detalhe da tarefa.
 *   - Se `forEdition` for `true`, mostra como campo de input editável.
 * - Se a tarefa estiver concluída:
 *   - O nome recebe estilo "line-through".
 *   - O botão é preenchido com um ícone de check e cor de destaque.
 *
 * Parâmetros (via objeto):
 * @param {Object} task - Objeto representando a tarefa.
 * @param {number} task.id - ID da tarefa.
 * @param {string} task.name - Nome da tarefa.
 * @param {boolean} task.completed - Define se a tarefa está concluída.
 * @param {boolean} [forEdition=false] - Define se a tarefa está em modo de edição.
 * @param {string} key - Identificador adicional usado na URL de navegação.
 *
 * Retorno:
 * - JSX representando a tarefa.
 */

export function TaskCard({ task, forEdition = false, key}) {
  let button = <button className="task-checkbox"></button>

  let name = (
    <a className={styles.task_name} href={`./detail.html?task_id=${task.id}&key=${key}`}>
      {task.name}
    </a>
  )
  
  let favorite = <span className="fa-regular fa-star"></span>

  if (forEdition) {
    name = <input type="text" className="form-input" name="name" id="name" value={task.name}/>
  }

  if (task.completed) {
    name.style.textDecoration = "line-through";
    button.style.backgroundColor = "var(--main-color)";
    button.innerHTML = `<span class="fa-solid fa-check"></span>`;
    button.style.border = "none";
  }

  if (task.favorite) {
    favorite.classList = "fa-solid fa-star"
    favorite.style.color = "var(--main-color)"
  }

  const taskCard = (
    <ol className={`${styles.task} task${task.id} box-animated`}>
        <div className={styles.task_display}>
          {button}
          {name}
        </div>
        
      <div className={`${styles.favorite} favorite`}>
        {favorite}
      </div>
    </ol>
  )

  return taskCard
}
