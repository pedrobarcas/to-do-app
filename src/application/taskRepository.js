import { Repository } from "./Repository";

/**
 *Classe abstraída da Aplicação principal.
 *--
 *Reponsável pela especialização em Tarefa.
 *
 *@function load: Sobrescrição da função ´load´ para filtrar por grupos pertecentes.
 *@function completed: Completa uma tarefa
 *
 *@example const taskRepository = new TaskRepository(new Service([], [], []), new Repository())
 *@module aplicação/Repositório
 *
 */

export class TaskRepository extends Repository {
  /**
   * @param {Object} service - Camada de regras de negócio para Task.
   * @param {Object} repository - Repositório concreto (infra de Task).
   * @async
   * @constructor
   */
  constructor(service, repository) {
    super(service, repository);
  }

  /**
   * Alterna o estado de conclusão da tarefa (true/false).
   * Depois persiste a alteração no repositório.
   * @async
   * @param {Object} task - Entidade Task.
   * @returns {Object} Task atualizada.
   */
  async completed(task) {
    if (task.completed) task.completed = false;
    else task.completed = true;
    const resolution = await this.repository.edit(task);
    return resolution;
  }

  async favorited(task) {
    if (task.favorite) task.favorite = false;
    else task.favorite = true;
    const resolution = await this.repository.edit(task);
    return resolution;
  }

  /**
   * Filtra tarefas pertecentes a um determinado grupo
   *
   * @async
   * @param {string} group_id - Id do grupo o qual a tarefa pertence
   * @returns {Object}
   */
  async load(group_id) {
    const resolution = await this.repository.load(group_id);
    return resolution;
  }
}
