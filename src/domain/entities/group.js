/**
 * Entidade Group: representa um agrupamento de tarefas ou categorias.
 * Essa classe define apenas os dados essenciais, sem regras de negócio.
 * 
 * @example new Group(id, name, create_date... )
 */

export class Group {
  /**
   * @property {string|number} id - Identificador único do grupo.
   * @property {string} name - Nome do grupo.
   * @property {Date} create_date - Data de criação do grupo.
   * @property {string} color - Cor do grupo
   * @property {string} icon - Icone expresso em classes Awesome
   * @property {UUID} user_id - Id do usuário
   * 
   * @constructor
   */
  constructor(id, name, create_date, color, icon, user_id) {
    this.id = id;
    this.name = name;
    this.create_date = create_date;
    this.color = color;
    this.icon = icon;
    this.user_id = user_id;
  }
}
