import { Validator } from "./validator";
import { TaskDataException } from "../exceptions";

export class TaskDataValidator extends Validator {
    validate(task) {
        if (!task.name && !task.description) {
            throw new TaskDataException();
        }
    }
}