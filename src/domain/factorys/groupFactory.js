// Fábrica de Groups: responsável por instanciar objetos da entidade Group
// garantindo consistência no formato de criação.

import { v4 as uuidv4 } from "uuid";
import { DateFormat } from "../../utils/date.js";
import { Group } from "../entities/group.js";

export class GroupFactory {
  /**
   * Cria uma nova instância de Group.
   * @param {string} name - Nome do grupo.
   * @returns {Group} Novo grupo criado.
   */
  static create(name) {
    return new Group(
      uuidv4(), // id único
      name.trim(), // nome sem espaços extras
      DateFormat.DateFormatBrazilian() // data de criação formatada
    );
  }
}
