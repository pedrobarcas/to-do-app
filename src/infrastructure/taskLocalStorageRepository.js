export class TaskLocalStorageRepository {
  load() {
    const tasks = Object.entries(localStorage);
    return tasks.map((task) => JSON.parse(task[1]));
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

  find(id) {
    const task = this.load().find((task) => task.id === id);
    return task;
  }
}
