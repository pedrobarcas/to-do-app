import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { Observable } from "../../domain/Observable";

/**
 * ViewModel responsável pela criação de tarefas, integrando autenticação do Firebase,
 * a camada de domínio (Factory) e o repositório de persistência.
 *
 * Essa classe estende {@link Observable}, permitindo que observadores sejam notificados
 * sempre que uma nova tarefa for criada com sucesso.
 *
 * @class
 * @extends Observable
 * @since 1.0.0
 *
 * @example
 * // Exemplo de uso:
 * const vm = new CreateTaskViewModel(taskFactory, taskRepository);
 * 
 * vm.subscribe((task) => console.log("Nova tarefa criada:", task));
 * 
 * await vm.create("Estudar TypeScript", "grupo123");
 */
export class CreateTaskViewModel extends Observable {
  /**
   * Cria uma nova instância do CreateTaskViewModel.
   *
   * @constructor
   * @param {Object} factory - Instância responsável pela criação de objetos Task.
   * Deve expor um método `create(name, userId, groupId)`.
   * @param {Object} repository - Repositório responsável pela persistência das tarefas.
   * Deve expor um método `save(task)` que retorne uma Promise.
   *
   * @example
   * const vm = new CreateTaskViewModel(taskFactory, taskRepository);
   */
  constructor(factory, repository) {
    super();
    /**
     * Fábrica usada para construir novas tarefas.
     * @type {Object}
     * @private
     */
    this.factory = factory;

    /**
     * Repositório usado para salvar as tarefas no banco de dados.
     * @type {Object}
     * @private
     */
    this.repository = repository;
  }

  /**
   * Cria uma nova tarefa associada ao usuário autenticado e a um grupo específico.
   *
   * Este método aguarda a autenticação do Firebase para obter o `userId` e, em seguida,
   * utiliza a `factory` e o `repository` para construir e persistir a nova tarefa.
   * 
   * Após o salvamento bem-sucedido, todos os observadores são notificados via {@link Observable#notify}.
   *
   * @async
   * @param {string|Object} obj - Nome da tarefa ou objeto com dados necessários para criação.
   * @param {string} groupId - Identificador do grupo ao qual a tarefa pertence.
   * @returns {Promise<Object>} Promessa resolvida com o resultado do repositório.
   *
   * @fires Observable#notify
   * @throws {Error} Se ocorrer falha durante a autenticação ou persistência.
   *
   * @example
   * await vm.create("Finalizar documentação", "grupo001");
   */
  async create(obj, groupId) {
    const user = await new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        if (user) resolve(user);
      });
    });

    const object = this.factory.create(obj, user.uid, groupId);
    const resolution = await this.repository.save(object);
    this.notify(object);
    return resolution;
  }
}
