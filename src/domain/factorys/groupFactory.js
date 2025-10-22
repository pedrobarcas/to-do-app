// Fábrica de Groups: responsável por instanciar objetos da entidade Group
// garantindo consistência no formato de criação.

import { DateFormat } from "../../utils/date.js";
import { Group } from "../entities/group.js";

export class GroupFactory {
  /**
   * Cria uma nova instância de Group.
   * @param {string} name - Nome do grupo.
   * @param {string} user_id - Id do usuario
   * @returns {Group} Novo grupo criado.
   */
  static create(name, color = undefined, icon, user_id) {
    return new Group(
      name.trim(),
      name.trim(), // nome sem espaços extras
      DateFormat.DateFormatBrazilian(),
      color, // data de criação formatada
      icon,
      user_id
    );
  }
}
