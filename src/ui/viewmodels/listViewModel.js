/**
 * Classe ListViewModel
 * --------------------
 * Responsável por recuperar e renderizar todas as entidades (ex.: tarefas).
 *
 * Estrutura:
 * - Recebe um `repository` (fonte de dados).
 *
 * Métodos:
 * - load():
 *   1. Retorna todos os objetos armazenados no repositório.
 *
 * Exemplo de uso:
 * const vm = new ListViewModel(LocalStorageRepository);
 * const tasks = vm.load();
 */

export class ListViewModel {
  constructor(repository) {
    this.repository = repository;
  }

  load() {
    return this.repository.load();
  }
}
