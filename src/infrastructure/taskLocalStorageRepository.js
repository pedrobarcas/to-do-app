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
