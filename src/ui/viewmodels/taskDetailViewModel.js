export class TaskDetailViewModel {
  constructor(repository, queryParam) {
    this.repository = repository;
    this.queryParam = queryParam;
  }

  completedTask(task) {
    return this.repository.completed(task);
  }

  get getTask() {
    return this.repository.find(this.queryParam.getQueryParams("task_id"));
  }
}
