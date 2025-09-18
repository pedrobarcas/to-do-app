export class EditViewModel {
  constructor(repository, service) {
    this.repository = repository;
    this.service = service;
  }

  edit(object, updates = {}) {
    const updatedTask = this.service.edit(object, updates);
    return this.repository.edit(updatedTask);
  }
}
