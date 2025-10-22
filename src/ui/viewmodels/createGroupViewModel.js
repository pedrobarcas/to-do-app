import { Observable } from "../../domain/Observable";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/firebase";

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

export class GroupCreateViewModel extends Observable {
  constructor(factory, repository) {
    super();
    this.factory = factory;
    this.repository = repository;
  }

  create(key, color = "", icon = "fa-solid fa-list-ul") {
    let name = key;
    if (key === "") {
      name = "Lista sem título";
      key = "Lista sem título";
    }

    let i = 1;

    while (this.repository.find(name)) {
      i++;
      name = `${key} (${i})`;
    }

    onAuthStateChanged(auth, (user) => {
      const object = this.factory.create(name, color, icon, user.uid);
      const saved = this.repository.save(object);
      this.notify(saved);
    });
  }
}
