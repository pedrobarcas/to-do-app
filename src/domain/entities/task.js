// 📂 Domain/Task.js
// Entidade Task: representa uma tarefa dentro da aplicação.
// Contém apenas propriedades fundamentais da entidade.

export class Task {
  /**
   * @param {string|number} id - Identificador único da tarefa.
   * @param {string} name - Nome da tarefa.
   * @param {string} description - Descrição detalhada da tarefa.
   * @param {Date} create_date - Data de criação da tarefa.
   * @param {boolean} completed - Indica se a tarefa está concluída.
   * @param {Date|null} date - Data de vencimento/execução (opcional).
   * @param {File|string|null} file - Arquivo associado à tarefa (opcional).
   */
  constructor(id, name, description, create_date, completed, date, file) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.create_date = create_date;
    this.completed = completed;
    this.date = date;
    this.file = file;
  }
}
