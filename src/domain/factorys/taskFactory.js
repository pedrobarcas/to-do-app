// Fábrica de Tasks: responsável por instanciar objetos da entidade Task
// garantindo que eles já sejam criados com dados válidos e consistentes.

import { v4 as uuidv4 } from "uuid";
import { DateFormat } from "../../utils/date.js";
import { Task } from "../entities/task.js";

export class TaskFactory {
  /**
   * Cria uma nova instância de Task.
   * @param {string} name - Nome da tarefa.
   * @param {string} [userId] - Descrição opcional da tarefa.
   * @returns {Task} Nova tarefa criada.
   */
  static create(name, userId) {
    const task = new Task(
      uuidv4(), // id único
      name.trim(), // nome sem espaços extras
      "", // descrição limpa
      DateFormat.DateFormatBrazilian(), // data de criação formatada
      false, // completed (default: false)
      null, // date (sem prazo por padrão)
      null, // file (sem anexo inicial)
      userId
    );

    return {
      id: task.id,
      name: task.name,
      description: task.description,
      create_date: task.create_date,
      completed: task.completed,
      date: task.date,
      file: task.file,
      user_id: task.user_id,
    };
  }
}
