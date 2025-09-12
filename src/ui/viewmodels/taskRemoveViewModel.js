export class TaskRemoveViewModel {
  constructor(repository) {
    this.repository = repository;
  }

  removeTask(task) {
    return this.repository.remove(task);
  }
}
