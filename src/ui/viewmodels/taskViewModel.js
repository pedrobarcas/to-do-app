export class TaskViewModel{
    constructor(repository, factory){
        this.repository = repository;
        this.factory = factory;
    }

    createTask(name){
        const task = this.factory.createTask(name);
        return this.repository.save(task);
    }

    completedTask(task){
        return this.repository.completed(task);
    }

    loadTasks(){
        return this.repository.load();
    }
    
}