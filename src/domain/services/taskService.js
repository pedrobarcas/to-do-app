import { Service } from "./Service";

/**
 * Serviço específico para entidade Task.
 * --
 * Extende o Service genérico adicionando regras de negócio de edição de tarefas.
 *
 * @module domínio/serviços/taskService
 */
export class TaskService extends Service {
  /**
   * @param {Array<Object>} validatorsEdit - Validadores aplicados em edição de Task.
   * @param {Array<Object>} validatorsRemove - Validadores aplicados em remoção de Task.
   * @param {Array<Object>} validatorsSave - Validadores aplicados em salvamento de Task.
   */
  constructor(validatorsEdit = [], validatorsRemove = [], validatorsSave = []) {
    super(validatorsEdit, validatorsRemove, validatorsSave);
  }

  /**
   * Edita uma Task aplicando as atualizações fornecidas.
   * Antes, executa os validadores de edição.
   * @param {Object} task - A Task a ser editada.
   * @param {Object} [updates={}] - Campos a serem atualizados.
   * @returns {Object} Nova Task com as alterações aplicadas.
   */
  edit(task, updates = {}) {
    this.validate(task, this.validatorsEdit);

    const updatedTask = {
      ...task,
      ...updates,
    };

    return updatedTask;
  }
}
