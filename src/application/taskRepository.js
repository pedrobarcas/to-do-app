import { Repository } from "./Repository";

export class TaskRepository extends Repository {
  constructor(service, repository) {
    super(service, repository);
  }

  completed(task) {
    if (task.completed) task.completed = false;
    else task.completed = true;

    return this.repository.edit(task);
  }

  edit(task) {
    return this.repository.edit(task);
  }
}
