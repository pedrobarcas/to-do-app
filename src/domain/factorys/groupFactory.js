import { v4 as uuidv4 } from "uuid";
import { DateFormat } from "../../utils/date.js";
import { Group } from "../entities/group.js";

export class GroupFactory {
  static create(name, type) {
    return new Group(
      uuidv4(),
      name.trim(),
      type.trim(),
      DateFormat.DateFormatBrazilian()
    );
  }
}
