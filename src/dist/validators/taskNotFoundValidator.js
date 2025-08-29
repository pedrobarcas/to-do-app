import { Validator } from "./validator";
import { TaskNotFound } from "../exceptions/taskNotFound";

export class TaskNotFoundValidator extends Validator{
    validate(task){
        if (!localStorage.getItem(task.id)){
            throw new TaskNotFound();
        }
    }
}