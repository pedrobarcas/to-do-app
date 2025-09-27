// Classe genérica de repositório na camada Application.
// Responsável por orquestrar o Service (regras de negócio)
// e o Repository real (infraestrutura: DB, LocalStorage, API...).

export class Repository {
  /**
   * @param {Object} service - Camada de regras de negócio (validações, lógica).
   * @param {Object} repository - Repositório concreto (infraestrutura).
   */
  constructor(service, repository) {
    this.service = service;
    this.repository = repository;
  }

  /**
   * Carrega todos os objetos do repositório.
   * @returns {Array} Lista de objetos armazenados.
   */
  load() {
    return this.repository.load();
  }

  /**
   * Valida e salva um objeto.
   * Primeiro chama o service para aplicar regras de negócio,
   * depois persiste no repositório concreto.
   * @param {Object} object - Entidade a ser salva.
   * @returns {Object} Objeto salvo.
   */
  save(object) {
    this.service.save(object);
    return this.repository.save(object);
  }

  /**
   * Valida e remove um objeto.
   * Primeiro o service confirma se pode ser removido,
   * depois o repository executa a remoção.
   * @param {Object} object - Entidade a ser removida.
   * @returns {Object} Objeto removido.
   */
  remove(object) {
    const validatedTask = this.service.remove(object);
    return this.repository.remove(validatedTask);
  }

  /**
   * Edita uma entidade existente.
   * @param {Object} task - Entidade a ser editada.
   * @returns {Object} Entidade editada.
   */
  edit(task) {
    return this.repository.edit(task);
  }

  /**
   * Busca uma entidade pelo ID.
   * @param {string|number} id - Identificador da entidade.
   * @returns {Object|null} Entidade encontrada ou null.
   */
  find(id) {
    return this.repository.find(id);
  }

  removeGroup(key) {
    return this.repository.removeGroup(key);
  }
}
