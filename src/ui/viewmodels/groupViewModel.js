import { Observable } from "../../domain/Observable";

/**
 * ViewModel responsável por gerenciar grupos de tarefas ou entidades similares.
 *
 * Essa classe atua como intermediária entre a camada de domínio e a interface,
 * encapsulando operações de leitura, edição e remoção de grupos, além de notificar
 * automaticamente os observadores sobre mudanças relevantes.
 *
 * @class
 * @extends Observable
 * @since 1.0.0
 *
 * @example
 * const vm = new GroupViewModel(repository, groupRepository, service);
 *
 * vm.subscribe((event) => console.log("Grupo modificado:", event));
 * 
 * await vm.edit(grupo, { name: "Novo Nome" });
 * await vm.remove("group-123");
 */
export class GroupViewModel extends Observable {
  /**
   * Cria uma nova instância de GroupViewModel.
   *
   * @constructor
   * @param {Object} repository - Repositório principal responsável pelas operações de persistência de grupos.
   * Deve implementar os métodos `find(key)`, `edit(object)` e `remove(object)`.
   * @param {Object} groupRepository - Repositório auxiliar responsável por relacionamentos ou índices de grupos.
   * Deve implementar o método `remove(key)`.
   * @param {Object} service - Serviço de domínio responsável por aplicar regras de negócio e validações.
   * Deve implementar o método `edit(object, updates)`.
   *
   * @example
   * const vm = new GroupViewModel(groupRepo, subRepo, groupService);
   */
  constructor(repository, groupRepository, service) {
    super();
    /**
     * Repositório principal de persistência.
     * @type {Object}
     * @private
     */
    this.repository = repository;

    /**
     * Repositório auxiliar (ex: estrutura de índices ou associação de grupos).
     * @type {Object}
     * @private
     */
    this.groupRepository = groupRepository;

    /**
     * Serviço de domínio usado para aplicar regras de negócio.
     * @type {Object}
     * @private
     */
    this.service = service;
  }

  /**
   * Busca um grupo com base na chave fornecida.
   *
   * @async
   * @param {string} key - Identificador do grupo a ser buscado.
   * @returns {Promise<Object|null>} O grupo encontrado ou `null` caso não exista.
   *
   * @example
   * const group = await vm.find("group-001");
   */
  async find(key) {
    const resolution = await this.repository.find(key);
    return resolution;
  }

  /**
   * Remove um grupo e seus vínculos associados.
   *
   * Este método limpa todos os observadores, busca o grupo correspondente e executa 
   * a remoção tanto no repositório principal quanto no auxiliar.  
   * Após a exclusão, notifica todos os observadores informando a chave do grupo removido.
   *
   * @async
   * @param {string} key - Identificador do grupo a ser removido.
   * @returns {Promise<void>}
   *
   * @fires Observable#notify
   * @example
   * await vm.remove("group-123");
   */
  async remove(key) {
    this.unsubscribeAll();
    const group = await this.repository.find(key);
    await this.repository.remove(group);
    await this.groupRepository.remove(key);

    this.notify({ removed: key });
  }

  /**
   * Edita um grupo existente aplicando as atualizações informadas.
   *
   * Esse método utiliza o `service` para aplicar regras de negócio,
   * envia as modificações para o repositório e notifica os observadores 
   * com a nova versão do grupo.
   *
   * @async
   * @param {Object} group - Grupo original que será atualizado.
   * @param {Object} [updates={}] - Objeto contendo os campos a serem modificados.
   * @returns {Promise<Object>} O grupo atualizado retornado pelo repositório.
   *
   * @fires Observable#notify
   * @example
   * const updated = await vm.edit(group, { name: "Grupo Atualizado" });
   */
  async edit(group, updates = {}) {
    const updatedGroup = this.service.edit(group, updates);
    console.log(updatedGroup);
    const obj = await this.repository.edit(updatedGroup);
    console.log(obj);
    this.notify(updatedGroup);
    return obj;
  }
}
