export class CreateViewModel {
  constructor(factory, repository) {
    this.factory = factory;
    this.repository = repository;
  }

  create(name) {
    const task = this.factory.create(name);
    return this.repository.save(task);
  }
}
