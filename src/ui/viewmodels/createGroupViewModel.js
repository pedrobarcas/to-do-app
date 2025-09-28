/**
 * Classe CreateViewModel
 * ----------------------
 * Responsável por criar e salvar novas entidades (ex.: tarefas, grupos).
 *
 * Estrutura:
 * - Recebe uma `factory` (para instanciar objetos padronizados).
 * - Recebe um `repository` (para persistir no armazenamento).
 *
 * Métodos:
 * - create(obj):
 *   1. Cria uma nova instância utilizando a factory.
 *   2. Salva a instância no repositório.
 *   3. Retorna o objeto persistido.
 *
 * Exemplo de uso:
 * const vm = new CreateViewModel(TaskFactory, LocalStorageRepository);
 * vm.create({ name: "Estudar MVVM" });
 */

export class GroupCreateViewModel {
  constructor(factory, repository) {
    this.factory = factory;
    this.repository = repository;
  }

  create(key, other = "") {
    let name = key;
    let i = 0;

    while (this.repository.find(name)) {
      i++;
      name = `${key} (${i})`;
    }

    const object = this.factory.create(name, other);
    return this.repository.save(object);
  }
}
