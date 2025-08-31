import { v4 as uuidv4 } from "uuid";
import { DateFormat } from "../utils/date.js";
import { Task } from "./task.js";


export class TaskFactory {
    static createTask(name, description='') {
        return new Task(
            uuidv4(),
            name.trim(),
            description.trim(),
            DateFormat.DateFormatBrazilian(),
            false
        );
    }
}