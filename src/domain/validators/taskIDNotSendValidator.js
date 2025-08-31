import { Validator } from "./validator";
import { TaskIDNotSend } from "../exceptions/taskIDNotSend";

export class TaskIDNotSendValidator extends Validator{
    validate(task){
        if (!task.id){
            throw new TaskIDNotSend();
        }
    }
}