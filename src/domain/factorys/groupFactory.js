// Fábrica de Groups: responsável por instanciar objetos da entidade Group
// garantindo consistência no formato de criação.

import { DateFormat } from "../../utils/date.js";
import { Group } from "../entities/group.js";
import { v4 as uuidv4 } from "uuid";

export class GroupFactory {
  /**
   * Cria uma nova instância de Group.
   * @param {string} name - Nome do grupo.
   * @param {string} user_id - Id do usuario
   * @returns {Group} Novo grupo criado.
   */
  static create(name, color = undefined, icon, user_id) {
    const group = new Group(
      uuidv4(),
      name.trim(), // nome sem espaços extras
      DateFormat.DateFormatBrazilian(),
      color, // data de criação formatada
      icon,
      user_id
    );

    return {
      id: group.id,
      name: group.name,
      create_date: group.create_date,
      color: group.color,
      icon: group.icon,
      user_id: group.user_id,
    };
  }
}
