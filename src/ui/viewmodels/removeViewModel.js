export class RemoveViewModel {
  constructor(repository) {
    this.repository = repository;
  }

  remove(object) {
    return this.repository.remove(object);
  }
}
