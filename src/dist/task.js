import { v4 as uuidv4 } from "uuid";
import { DateFormat } from "./../utils/date.js";

export class Task {
    constructor(id, name, description, date, completed) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.date = date;
        this.completed = completed
    }
}

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

export class TaskService {
    constructor(validatorsEdit = [], validatorsRemove = [], validatorsSave = []) {
        this.validatorsEdit = validatorsEdit;
        this.validatorsRemove = validatorsRemove;
        this.validatorsSave = validatorsSave;
    }

    validate(task, strategy) {
        if (!Array.isArray(strategy)) {
            throw new Error("Estratégia de validação inválida.");
        }
        strategy.forEach(v => v.validate(task));
    }

    save(task) {
        this.validate(task, this.validatorsSave);
        return task;
    }

    edit(task, name = '', description = '') {
        this.validate(task, this.validatorsEdit);

        if (name != null) task.name = name.trim();
        if (description != null) task.description = description.trim();

        return task;
    }

    remove(task) {
        this.validate(task, this.validatorsRemove);
        return task;
    }
}

export class TaskRepository {
    constructor(service, repository) {
        this.taskService = service;
        this.repository = repository;
    }
    
    load(){
        return this.repository.load();
    }

    completed(task){
        if (task.completed) task.completed = false;
        else task.completed = true;

        return this.repository.edit(task)
    }

    save(task) {
        this.taskService.save(task);
        return this.repository.save(task);
    }


    edit(task, name = '', description = '') {
        const updatedTask = this.taskService.edit(task, name, description);
        return this.repository.edit(updatedTask);
    }

    remove(task) {
        const validatedTask = this.taskService.remove(task);
        return this.repository.remove(validatedTask);
    }

}

export class TaskLocalStorageRepository {
    
    load(){
        return Object.entries(localStorage)
    }    
    save(task) {
        localStorage.setItem(task.id, JSON.stringify(task));
        return "Task added successfully";
    }

    edit(task) {
        localStorage.setItem(task.id, JSON.stringify(task));
        return "Task updated successfully";
    }

    remove(task) {
        localStorage.removeItem(task.id);
        return "Task removed successfully";
    }
}
