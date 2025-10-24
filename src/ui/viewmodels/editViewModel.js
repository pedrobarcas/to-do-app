import { Observable } from "../../domain/Observable";

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

export class EditViewModel extends Observable {
  constructor(repository, service) {
    super();
    this.repository = repository;
    this.service = service;
  }

  async edit(object, updates = {}) {
    const updatedTask = this.service.edit(object, updates);
    const obj = await this.repository.edit(updatedTask);
    this.notify(updatedTask);
    return obj;
  }
}
