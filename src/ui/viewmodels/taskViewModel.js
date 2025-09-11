export class TaskViewModel {
  constructor(repository, factory, queryParam) {
    this.repository = repository;
    this.factory = factory;
    this.queryParam = queryParam;
  }

  get getTask() {
    console.log(this.queryParam.getQueryParams("task_id"));
    return this.repository.find(this.queryParam.getQueryParams("task_id"));
  }

  createTask(name) {
    const task = this.factory.createTask(name);
    return this.repository.save(task);
  }

  completedTask(task) {
    return this.repository.completed(task);
  }

  loadTasks() {
    return this.repository.load();
  }

  removeTask(task) {
    return this.repository.remove(task);
  }

  editTask(task, name = "", description = "", date = "") {
    console.log(date);
    return this.repository.edit(task, name, description, date);
  }
}
