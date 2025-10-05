// Componente que representa o formulário de edição/criação de uma tarefa.
// Inclui campos de data, upload de arquivo e anotações.

/**
 * Renderiza o formulário principal de informações da tarefa.
 * @param {{ task: Object }} task - Objeto contendo dados da tarefa.
 * @param {string} task.task.date - Data associada à tarefa.
 * @param {string} task.task.description - Anotações da tarefa.
 * @returns {HTMLElement} Formulário com campos de edição.
 */

import { h } from "../../h";
export function Form(props) {
  return (
    <section className="main-infos-task" id="main-infos-task">
   
      <div className="form-input-box">
        <span className="fa-regular fa-sun"></span>
        <button className="remember-me-button form-input">Lembrar-me</button>
      </div>

      <div className="form-input-box">
        <label htmlFor="date" className="fa-regular fa-calendar"></label>
        <input
          type="date"
          className="form-input"
          name="date"
          id="date"
          value={props.task.date}
        />
      </div>

      <div className="form-input-box">
        <label htmlFor="archive" className="fa-solid fa-paperclip"></label>
        <label htmlFor="archive"> Adicionar um arquivo</label>
        <input
          type="file"
          className="form-input"
          name="archive"
          id="archive"
        />
      </div>

      <textarea
        name="anotations"
        id="anotations"
        placeholder="Adicionar anotações"
        value={props.task.description}
      ></textarea>
    </section>
  );
}
