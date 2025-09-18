export class Repository {
  constructor(service, repository) {
    this.service = service;
    this.repository = repository;
  }

  load() {
    return this.repository.load();
  }

  save(object) {
    this.service.save(object);
    return this.repository.save(object);
  }

  remove(object) {
    const validatedTask = this.service.remove(object);
    return this.repository.remove(validatedTask);
  }

  edit(task) {
    return this.repository.edit(task);
  }

  find(id) {
    return this.repository.find(id);
  }
}
