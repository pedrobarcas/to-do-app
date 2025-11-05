import { v4 as uuidv4 } from "uuid";
import { DateFormat } from "../../utils/date.js";
import { Task } from "../entities/task.js";

/**
 * Fábrica responsável pela criação de novas instâncias de {@link Task}.
 * --
 *
 * Essa classe encapsula a lógica de construção de tarefas, garantindo que
 * todas as tarefas sejam criadas com um ID único, data formatada e estrutura consistente.
 *
 * @class
 * @since 1.0.0
 * @module domínio/fabricas/taskFactory
 */
export class TaskFactory {
  /**
   * Cria uma nova instância de {@link Task}.
   * --
   *
   * Essa função gera automaticamente um identificador único (UUID) e define
   * a data de criação no formato brasileiro (dd/mm/yyyy). É ideal para uso em
   * contextos onde tarefas precisam ser instanciadas de forma padronizada,
   * como ao salvar novas tarefas no banco de dados ou ao registrar eventos do usuário.
   *
   * @static
   * @param {string} name - Nome da tarefa. Será automaticamente aparado (`trim`).
   * @param {string} [userId] - Identificador opcional do usuário associado à tarefa.
   * @param {string} [groupId] - Identificador opcional do grupo ao qual a tarefa pertence.
   * @returns {Task} Retorna um objeto representando a tarefa criada.
   *
   * @throws {Error} Caso o parâmetro `name` seja inválido ou vazio.
   *
   * @example
   * // Exemplo de uso
   * const novaTarefa = TaskFactory.create("Estudar TypeScript", "user-123", "grupo-456");
   * console.log(novaTarefa.id); // -> "a12b3c4d..."
   *
   * @since 1.0.0
   */
  static create(name, userId, groupId) {
    const task = new Task(
      uuidv4(),
      name.trim(),
      "",
      DateFormat.DateFormatBrazilian(),
      false,
      null,
      null,
      userId,
      groupId,
      false
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
      group_id: task.group_id,
      favorite: task.favorite,
    };
  }
}
