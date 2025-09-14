export class TaskEditViewModel {
  constructor(repository, service) {
    this.repository = repository;
    this.service = service;
  }

  editTask(task, updates = {}) {
    const updatedTask = this.service.edit(task, updates);
    return this.repository.edit(updatedTask);
  }
}
