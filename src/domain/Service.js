export class Service {
  constructor(validatorsEdit = [], validatorsRemove = [], validatorsSave = []) {
    this.validatorsEdit = validatorsEdit;
    this.validatorsRemove = validatorsRemove;
    this.validatorsSave = validatorsSave;
  }

  validate(object, strategy) {
    if (!Array.isArray(strategy)) {
      throw new Error("Estratégia de validação inválida.");
    }
    strategy.forEach((v) => v.validate(object));
  }

  save(object) {
    this.validate(object, this.validatorsSave);
    return object;
  }

  remove(object) {
    this.validate(object, this.validatorsRemove);
    return object;
  }
}
