// Fábrica de Tasks: responsável por instanciar objetos da entidade Task
// garantindo que eles já sejam criados com dados válidos e consistentes.

import { v4 as uuidv4 } from "uuid";
import { DateFormat } from "../../utils/date.js";
import { Task } from "../entities/task.js";

export class TaskFactory {
  /**
   * Cria uma nova instância de Task.
   * @param {string} name - Nome da tarefa.
   * @param {string} [description=""] - Descrição opcional da tarefa.
   * @returns {Task} Nova tarefa criada.
   */
  static create(name, description = "") {
    return new Task(
      uuidv4(), // id único
      name.trim(), // nome sem espaços extras
      description.trim(), // descrição limpa
      DateFormat.DateFormatBrazilian(), // data de criação formatada
      false, // completed (default: false)
      null, // date (sem prazo por padrão)
      null // file (sem anexo inicial)
    );
  }
}
