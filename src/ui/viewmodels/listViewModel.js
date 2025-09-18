export class ListViewModel {
  constructor(repository) {
    this.repository = repository;
  }

  load() {
    return this.repository.load();
  }
}
