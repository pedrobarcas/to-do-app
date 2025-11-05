/**
 * Entidade Task: representa uma tarefa dentro da aplicação.
 * --
 * Contém apenas propriedades fundamentais da entidade.
 * @module domínio/entidades/tarefa
 */

export class Task {
  /**
   * @property {string|number} id - Identificador único da tarefa.
   * @property {string} name - Nome da tarefa.
   * @property {string} description - Descrição detalhada da tarefa.
   * @property {Date} create_date - Data de criação da tarefa.
   * @property {boolean} completed - Indica se a tarefa está concluída.
   * @property {Date|null} date - Data de vencimento/execução (opcional).
   * @property {File|string|null} file - Arquivo associado à tarefa (opcional).
   * @property {boolean} favorite - Indica se a tarefa é favorita ou não.
   */
  constructor(
    id,
    name,
    description,
    create_date,
    completed,
    date,
    file,
    user_id,
    group_id,
    favorite,
    my_day
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.create_date = create_date;
    this.completed = completed;
    this.date = date;
    this.file = file;
    this.user_id = user_id;
    this.group_id = group_id;
    this.favorite = favorite;
    this.my_day = my_day;
  }
}
