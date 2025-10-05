import { Observable } from "../../domain/Observable";

/**
 * Classe RemoveViewModel
 * ----------------------
 * Responsável por remover entidades existentes do repositório.
 *
 * Estrutura:
 * - Recebe um `repository` (fonte de dados).
 *
 * Métodos:
 * - remove(object):
 *   1. Remove a entidade correspondente no repositório.
 *   2. Retorna o resultado da operação de remoção.
 *
 * Exemplo de uso:
 * const vm = new RemoveViewModel(LocalStorageRepository);
 * vm.remove(task);
 */

export class RemoveViewModel extends Observable {
  constructor(repository) {
    super();
    this.repository = repository;
  }

  remove(object) {
    const removed = this.repository.remove(object);
    this.notify();
    return removed;
  }

  removeGroup(key) {
    const removed = this.repository.clear(key);
    this.notify();
    return removed;
  }
}
