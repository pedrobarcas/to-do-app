export class TaskService {
    constructor(validatorsEdit = [], validatorsRemove = [], validatorsSave = []) {
        this.validatorsEdit = validatorsEdit;
        this.validatorsRemove = validatorsRemove;
        this.validatorsSave = validatorsSave;
    }

    validate(task, strategy) {
        if (!Array.isArray(strategy)) {
            throw new Error("Estratégia de validação inválida.");
        }
        strategy.forEach(v => v.validate(task));
    }

    save(task) {
        this.validate(task, this.validatorsSave);
        return task;
    }

    edit(task, name = '', description = '') {
        this.validate(task, this.validatorsEdit);

        if (name != null) task.name = name.trim();
        if (description != null) task.description = description.trim();

        return task;
    }

    remove(task) {
        this.validate(task, this.validatorsRemove);
        return task;
    }
}