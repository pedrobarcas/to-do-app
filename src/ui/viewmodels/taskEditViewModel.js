export class TaskEditViewModel {
  constructor(repository) {
    this.repository = repository;
  }

  editTask(task, name = "", description = "", date = "") {
    return this.repository.edit(task, name, description, date);
  }
}
