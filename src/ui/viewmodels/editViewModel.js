/**
 * Classe EditViewModel
 * --------------------
 * Responsável por aplicar edições em entidades já existentes.
 *
 * Estrutura:
 * - Recebe um `repository` (para persistir alterações).
 * - Recebe um `service` (onde estão as validações e regras de negócio).
 *
 * Métodos:
 * - edit(object, updates):
 *   1. Valida e processa a edição via `service`.
 *   2. Atualiza o objeto no `repository`.
 *   3. Retorna o objeto atualizado.
 *
 * Exemplo de uso:
 * const vm = new EditViewModel(LocalStorageRepository, TaskService);
 * vm.edit(task, { name: "Nova tarefa editada" });
 */

export class EditViewModel {
  constructor(repository, service) {
    this.repository = repository;
    this.service = service;
  }

  edit(object, updates = {}) {
    const updatedTask = this.service.edit(object, updates);
    return this.repository.edit(updatedTask);
  }
}
