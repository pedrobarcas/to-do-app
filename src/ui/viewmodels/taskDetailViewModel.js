import { DetailViewModel } from "./detailViewModel";

export class TaskDetailViewModel extends DetailViewModel {
  constructor(repository, queryParam) {
    super(repository, queryParam);
  }

  completedTask(task) {
    return this.repository.completed(task);
  }
}
