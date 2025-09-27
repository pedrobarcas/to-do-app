// Fábrica de Groups: responsável por instanciar objetos da entidade Group
// garantindo consistência no formato de criação.

import { DateFormat } from "../../utils/date.js";
import { Group } from "../entities/group.js";

export class GroupFactory {
  /**
   * Cria uma nova instância de Group.
   * @param {string} name - Nome do grupo.
   * @returns {Group} Novo grupo criado.
   */
  static create(name, color = undefined) {
    return new Group(
      name.trim(),
      name.trim(), // nome sem espaços extras
      DateFormat.DateFormatBrazilian(),
      color // data de criação formatada
    );
  }
}
