import { Observable } from "../../domain/Observable";

export class RelationViewModel extends Observable {
  constructor(factory, repository) {
    super();
    this.factory = factory;
    this.repository = repository;
  }

  async create(task_id, group_id, user_id) {
    const relation = this.factory.create(task_id, group_id, user_id);
    const resolution = await this.repository.save(relation);

    return resolution;
  }
}
