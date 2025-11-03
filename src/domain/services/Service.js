// Classe base para Services na camada Domain.
// Responsável por aplicar validações a objetos antes de executar operações de negócio.

/**
 * Classe base para os *Services* da camada **Domain**.
 * --
 *
 * Fornece um conjunto padrão de estratégias de validação para operações de negócio,
 * garantindo que objetos sejam verificados antes de serem persistidos, editados ou removidos.
 *
 * Essa classe é projetada para ser **herdada** por classes de serviço específicas (ex: `TaskService`, `UserService`),
 * que devem definir seus próprios validadores conforme a regra de domínio.
 *
 * @class
 * @abstract
 * @since 1.0.0
 *
 * @example
 * class UserService extends Service {
 *   constructor() {
 *     super([new EditValidator()], [new RemoveValidator()], [new SaveValidator()]);
 *   }
 * }
 * @module domínio/serviços/Serviços
 */
export class Service {
  /**
   * Cria uma nova instância base de Service.
   * --
   *
   * @constructor
   * @param {Array<Object>} [validatorsEdit=[]] - Lista de validadores aplicados na edição de objetos.
   * Cada validador deve implementar o método `validate(object)`.
   * @param {Array<Object>} [validatorsRemove=[]] - Lista de validadores aplicados na remoção de objetos.
   * @param {Array<Object>} [validatorsSave=[]] - Lista de validadores aplicados no salvamento de objetos.
   *
   * @example
   * const service = new Service([], [], [new RequiredFieldValidator()]);
   */
  constructor(validatorsEdit = [], validatorsRemove = [], validatorsSave = []) {
    this.validatorsEdit = validatorsEdit;
    this.validatorsRemove = validatorsRemove;
    this.validatorsSave = validatorsSave;
  }

  /**
   * Aplica uma lista de validadores sobre um objeto.
   * --
   *
   * Cada elemento da estratégia deve possuir um método `validate(object)`.
   *
   * @protected
   * @param {Object} object - Objeto a ser validado.
   * @param {Array<Object>} strategy - Lista de validadores a serem aplicados.
   * @throws {Error} Se `strategy` não for um array ou se algum validador falhar.
   *
   * @example
   * this.validate(user, this.validatorsSave);
   */
  validate(object, strategy) {
    if (!Array.isArray(strategy)) {
      throw new Error("Estratégia de validação inválida.");
    }
    strategy.forEach((v) => v.validate(object));
  }

  /**
   * Valida o objeto e o retorna pronto para ser salvo.
   * --
   *
   * @param {Object} object - Objeto a ser salvo.
   * @returns {Object} O mesmo objeto, após validação.
   *
   * @example
   * const validado = service.save({ nome: "Pedro" });
   */
  save(object) {
    this.validate(object, this.validatorsSave);
    return object;
  }

  /**
   * Valida o objeto e o retorna pronto para remoção.
   * --
   *
   * @param {Object} object - Objeto a ser removido.
   * @returns {Object} O mesmo objeto, após validação.
   *
   * @example
   * const validado = service.remove({ id: "123" });
   */
  remove(object) {
    this.validate(object, this.validatorsRemove);
    return object;
  }

  /**
   * Valida e aplica alterações em um objeto existente.
   * --
   *
   * @param {Object} object - Objeto original.
   * @param {Object} [updates={}] - Conjunto de campos e valores a serem atualizados.
   * @returns {Object} Um novo objeto contendo as propriedades atualizadas.
   *
   * @example
   * const atualizado = service.edit({ nome: "Pedro" }, { nome: "Pedro Barcas" });
   */
  edit(object, updates = {}) {
    this.validate(object, this.validatorsEdit);

    const updated = {
      ...object,
      ...updates,
    };

    return updated;
  }
}
