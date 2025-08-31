import { Validator } from "./validator";
import { TaskNotFound } from "../../domain/exceptions/taskNotFound";

export class TaskNotFoundValidator extends Validator{
    validate(task){
        if (!localStorage.getItem(task.id)){
            throw new TaskNotFound();
        }
    }
}