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
  async load() {
    const objects = await this.repository.load();
    return objects;
  }

  /**
   * Valida e salva um objeto.
   * Primeiro chama o service para aplicar regras de negócio,
   * depois persiste no repositório concreto.
   * @param {Object} object - Entidade a ser salva.
   * @returns {Object} Objeto salvo.
   */
  async save(object) {
    this.service.save(object);
    const resolution = await this.repository.save(object);
    return resolution;
  }

  /**
   * Valida e remove um objeto.
   * Primeiro o service confirma se pode ser removido,
   * depois o repository executa a remoção.
   * @param {Object} object - Entidade a ser removida.
   * @returns {Object} Objeto removido.
   */
  async remove(object) {
    const validatedTask = this.service.remove(object);
    const resolution = await this.repository.remove(validatedTask);
    return resolution;
  }

  /**
   * Edita uma entidade existente.
   * @param {Object} task - Entidade a ser editada.
   * @returns {Object} Entidade editada.
   */
  async edit(task) {
    const resolution = await this.repository.edit(task);
    return resolution;
  }

  /**
   * Busca uma entidade pelo ID.
   * @param {string|number} id - Identificador da entidade.
   * @returns {Object|null} Entidade encontrada ou null.
   */
  async find(id) {
    const resolution = await this.repository.find(id);
    return resolution;
  }

  async clear(key) {
    const resolution = await this.repository.clear(key);
    return resolution;
  }
}
