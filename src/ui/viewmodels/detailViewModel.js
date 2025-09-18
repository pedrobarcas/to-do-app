export class DetailViewModel {
  constructor(repository, queryParam) {
    this.repository = repository;
    this.queryParam = queryParam;
  }

  get(param) {
    return this.repository.find(this.queryParam.getQueryParams(param));
  }
}
