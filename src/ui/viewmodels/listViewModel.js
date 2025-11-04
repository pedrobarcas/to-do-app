import { Observable } from "../../domain/Observable";

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

export class ListViewModel extends Observable {
  constructor(repository) {
    super();
    this.repository = repository;
  }

  async load(cached = false) {
    const objects = await this.repository.load(cached);
    console.log(objects);
    this.notify();
    return objects;
  }
}
