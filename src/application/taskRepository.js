export class TaskRepository {
    constructor(service, repository) {
        this.taskService = service;
        this.repository = repository;
    }
    
    load(){
        return this.repository.load()
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

