// Classe base para Services na camada Domain.
// Responsável por aplicar validações a objetos antes de executar operações de negócio.

export class Service {
  /**
   * @param {Array<Object>} validatorsEdit - Lista de validadores usados na edição.
   * @param {Array<Object>} validatorsRemove - Lista de validadores usados na remoção.
   * @param {Array<Object>} validatorsSave - Lista de validadores usados no salvamento.
   */
  constructor(validatorsEdit = [], validatorsRemove = [], validatorsSave = []) {
    this.validatorsEdit = validatorsEdit;
    this.validatorsRemove = validatorsRemove;
    this.validatorsSave = validatorsSave;
  }

  /**
   * Aplica uma lista de validadores sobre um objeto.
   * @param {Object} object - Objeto a ser validado.
   * @param {Array<Object>} strategy - Lista de validadores.
   * Cada validador deve expor um método `validate(object)`.
   * @throws {Error} Se a estratégia não for um array.
   */
  validate(object, strategy) {
    if (!Array.isArray(strategy)) {
      throw new Error("Estratégia de validação inválida.");
    }
    strategy.forEach((v) => v.validate(object));
  }

  /**
   * Valida e retorna o objeto antes de ser salvo.
   * @param {Object} object - Objeto a ser salvo.
   * @returns {Object} Objeto validado.
   */
  save(object) {
    this.validate(object, this.validatorsSave);
    return object;
  }

  /**
   * Valida e retorna o objeto antes de ser removido.
   * @param {Object} object - Objeto a ser removido.
   * @returns {Object} Objeto validado.
   */
  remove(object) {
    this.validate(object, this.validatorsRemove);
    return object;
  }

  edit(object, updates = {}) {
    this.validate(object, this.validatorsEdit);

    const updated = {
      ...object,
      ...updates,
    };

    return updated;
  }
}
