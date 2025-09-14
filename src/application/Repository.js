export class Repository {
  constructor(service, repository) {
    this.taskService = service;
    this.repository = repository;
  }

  load() {
    return this.repository.load();
  }

  save(object) {
    this.taskService.save(object);
    return this.repository.save(object);
  }

  remove(object) {
    const validatedTask = this.taskService.remove(object);
    return this.repository.remove(validatedTask);
  }

  find(id) {
    return this.repository.find(id);
  }
}
