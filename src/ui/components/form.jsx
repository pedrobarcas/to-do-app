// Componente que representa o formulário de edição/criação de uma tarefa.
// Inclui campos de data, upload de arquivo e anotações.

/**
 * Renderiza o formulário principal de informações da tarefa.
 * @param {{ task: Object }} task - Objeto contendo dados da tarefa.
 * @param {string} task.task.date - Data associada à tarefa.
 * @param {string} task.task.description - Anotações da tarefa.
 * @returns {HTMLElement} Formulário com campos de edição.
 */
export function Form(task) {
  return (
    <section className="main-infos-task" id="main-infos-task">
      {/* Lembrar-me */}
      <div className="form-input-box">
        <span className="fa-regular fa-sun"></span>
        <button className="remember-me-button form-input">Lembrar-me</button>
      </div>

      {/* Data */}
      <div className="form-input-box">
        <label for="date" className="fa-regular fa-calendar"></label>
        <input
          type="date"
          className="form-input"
          name="date"
          id="date"
          value={task.task.date}
        />
      </div>

      {/* Arquivo */}
      <div className="form-input-box">
        <label for="archive" className="fa-solid fa-paperclip"></label>
        <label for="archive"> Adicionar um arquivo</label>
        <input
          type="file"
          className="form-input"
          name="archive"
          id="archive"
        />
      </div>

      {/* Anotações */}
      <textarea
        name="anotations"
        id="anotations"
        placeholder="Adicionar anotações"
        value={task.task.description}
      ></textarea>
    </section>
  );
}
