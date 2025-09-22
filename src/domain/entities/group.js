// Entidade Group: representa um agrupamento de tarefas ou categorias.
// Essa classe define apenas os dados essenciais, sem regras de negócio.

export class Group {
  /**
   * @param {string|number} id - Identificador único do grupo.
   * @param {string} name - Nome do grupo.
   * @param {Date} create_date - Data de criação do grupo.
   */
  constructor(id, name, create_date) {
    this.id = id;
    this.name = name;
    this.create_date = create_date;
  }
}
