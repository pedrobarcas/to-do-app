import { DateFormat } from "../../utils/date.js";
import { Group } from "../entities/group.js";
import { v4 as uuidv4 } from "uuid";

/**
 * Fábrica de Groups: responsável por instanciar objetos da entidade Group
 * --
 * garantindo consistência no formato de criação.
 *
 * @example const group = GroupFactory("Grupo", "#fff", "fa-solid fa-star", user_id)
 * @module domínio/fabricas/groupFactory
 */
export class GroupFactory {
  /**
   * Cria uma nova instância de Group.
   * --
   * @param {string} name - Nome do grupo.
   * @param {string} color - Cor do grupo.
   * @param {string} icon - Ícone do grupo.
   * @param {string} user_id - Id do usuario
   * @returns {Group} Novo grupo criado.
   */
  static create(name, color = undefined, icon, user_id) {
    const group = new Group(
      uuidv4(),
      name.trim(),
      DateFormat.DateFormatBrazilian(),
      color,
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
