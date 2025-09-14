export class TaskDetailView{
    constructor(taskDetailVM, taskEditVM, taskRemove, taskDetailComponent){
        this.taskDetailVM = taskDetailVM;
        this.taskEditVM = taskEditVM;
        this.taskRemoveVM = taskRemove;
        this.taskDetailComponent = taskDetailComponent
    }

    render(root){
        const task = this.taskDetailVM.getTask;
        root.appendChild(this.taskDetailComponent(task));
        
        const name = document.getElementById("name");
        const anotations = document.getElementById("anotations");
        const date = document.getElementById("date");

        const button_completed_task = document.querySelector(".task-checkbox");
        
        window.addEventListener("input", () => {
            this.taskEditVM.editTask(task, {
            name: name.value,
            description: anotations.value,
            date: date.value
           });
        });

        
        document.querySelector(".fa-trash").addEventListener("click", () => {
            this.taskRemoveVM.removeTask(task);
            window.location.href = "../../../index.html";
        
        })
        
        button_completed_task.addEventListener('click', () => {
              this.taskDetailVM.completedTask(task);
              location.reload();
        })
    }
}
