// Especialização do Repository genérico para lidar com "Task".
// Adiciona casos de uso específicos da entidade de tarefa.

import { Repository } from "./Repository";

export class TaskRepository extends Repository {
  /**
   * @param {Object} service - Camada de regras de negócio para Task.
   * @param {Object} repository - Repositório concreto (infra de Task).
   */
  constructor(service, repository) {
    super(service, repository);
  }

  /**
   * Alterna o estado de conclusão da tarefa (true/false).
   * Depois persiste a alteração no repositório.
   * @param {Object} task - Entidade Task.
   * @returns {Object} Task atualizada.
   */
  completed(task) {
    if (task.completed) task.completed = false;
    else task.completed = true;

    return this.repository.edit(task);
  }
}
