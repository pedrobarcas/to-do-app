import { Service } from "./Service";

export class TaskService extends Service {
  constructor(validatorsEdit = [], validatorsRemove = [], validatorsSave = []) {
    super(validatorsEdit, validatorsRemove, validatorsSave);
  }

  edit(task, updates = {}) {
    this.validate(task, this.validatorsEdit);

    const updatedTask = {
      ...task,
      ...updates,
    };

    return updatedTask;
  }
}
