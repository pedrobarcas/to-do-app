export class TaskListViewModel {
  constructor(repository) {
    this.repository = repository;
  }

  loadTasks() {
    return this.repository.load();
  }
}
