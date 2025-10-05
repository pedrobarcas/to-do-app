import { DetailViewModel } from "./detailViewModel";

/**
 * Classe TaskDetailViewModel
 * --------------------------
 * Especialização da `DetailViewModel` para lidar com tarefas.
 *
 * Estrutura:
 * - Herda o comportamento de buscar detalhes de uma entidade.
 * - Adiciona métodos específicos para manipulação de tarefas.
 *
 * Métodos:
 * - completedTask(task):
 *   1. Alterna o estado de conclusão da tarefa (true/false).
 *   2. Persiste a alteração no repositório.
 *   3. Retorna a tarefa atualizada.
 *
 * Exemplo de uso:
 * const vm = new TaskDetailViewModel(LocalStorageRepository, new QueryParams(window.location));
 * const task = vm.get("task_id");
 * vm.completedTask(task);
 */

export class TaskDetailViewModel extends DetailViewModel {
  constructor(repository, queryParam) {
    super(repository, queryParam);
  }

  completedTask(task) {
    const completed = this.repository.completed(task);
    this.notify();
    return completed;
  }
}
