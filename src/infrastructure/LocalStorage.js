// Implementação concreta de um repositório utilizando o LocalStorage do navegador.
// Responsável por persistir e recuperar dados localmente no cliente.

/**
 * Classe LocalStorageRepository
 * Abstrai operações de CRUD em um armazenamento baseado em LocalStorage.
 */
export class LocalStorageRepository {
  /**
   * @param {string} key - Chave única usada para armazenar e recuperar os dados no LocalStorage.
   */
  constructor(key) {
    this.key = key;
  }

  /**
   * Carrega todos os registros salvos no LocalStorage.
   * @private
   * @returns {Array<Object>} Lista de objetos armazenados.
   */
  _loadAll() {
    return JSON.parse(localStorage.getItem(this.key)) || [];
  }

  /**
   * Sobrescreve todos os registros no LocalStorage.
   * @private
   * @param {Array<Object>} data - Lista completa de objetos a serem salvos.
   */
  _saveAll(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  /**
   * Salva um novo objeto no LocalStorage.
   * @param {Object} object - Objeto a ser salvo.
   * @returns {Object} O objeto salvo.
   */
  save(object) {
    const data = this._loadAll();
    data.push(object);
    this._saveAll(data);
    return object;
  }

  /**
   * Retorna todos os objetos armazenados.
   * @returns {Array<Object>} Lista de objetos.
   */
  load() {
    return this._loadAll();
  }

  /**
   * Busca um objeto pelo seu ID.
   * @param {string|number} id - Identificador do objeto.
   * @returns {Object|null} Objeto encontrado ou null se não existir.
   */
  find(id) {
    console.log(id);
    return this._loadAll().find((obj) => obj.id == id);
  }

  /**
   * Edita um objeto existente (substitui pelo novo).
   * @param {Object} object - Objeto atualizado.
   * @returns {Object} O objeto atualizado.
   */
  edit(object) {
    const data = this._loadAll();
    const index = data.findIndex((obj) => obj.id === object.id);
    if (index !== -1) {
      data[index] = object;
      this._saveAll(data);
    }
    return object;
  }

  /**
   * Remove um objeto do LocalStorage.
   * @param {Object} object - Objeto a ser removido.
   */
  remove(object) {
    const data = this._loadAll().filter((obj) => obj.id !== object.id);
    this._saveAll(data);
  }

  /**
   * Remove um grupo no localStorage.
   * @param {string} key
   */
  removeGroup(key) {
    localStorage.removeItem(key);
  }
}
