import { Relation } from "../entities/relation";

export class RelationFactory {
  static create(group_id, task_id, user_id) {
    const relation = new Relation(group_id, task_id, user_id);

    return {
      group_id: relation.group_id,
      task_id: relation.task_id,
      user_id: relation.user_id,
    };
  }
}
