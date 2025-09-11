export class TaskRepository {
  constructor(service, repository) {
    this.taskService = service;
    this.repository = repository;
  }

  load() {
    return this.repository.load();
  }

  completed(task) {
    if (task.completed) task.completed = false;
    else task.completed = true;

    return this.repository.edit(task);
  }

  save(task) {
    this.taskService.save(task);
    return this.repository.save(task);
  }

  edit(task, name = "", description = "", date = null) {
    console.log(date);
    if (!name) {
      name = task.name;
    }

    if (!description) {
      description = task.description;
    }

    if (!date) {
      date = task.date;
    }
    const updatedTask = this.taskService.edit(task, name, description, date);
    return this.repository.edit(updatedTask);
  }

  remove(task) {
    const validatedTask = this.taskService.remove(task);
    return this.repository.remove(validatedTask);
  }

  find(id) {
    return this.repository.find(id);
  }
}
