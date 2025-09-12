export class TaskCreateViewModel {
  constructor(factory, repository) {
    this.factory = factory;
    this.repository = repository;
  }

  createTask(name) {
    const task = this.factory.createTask(name);
    return this.repository.save(task);
  }
}
