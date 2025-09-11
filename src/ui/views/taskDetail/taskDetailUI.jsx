import { taskDetail } from "../../components/taskDetail";
import { taskViewModel } from "../..";
import { taskDetailViewModel } from "../..";

const task = taskDetailViewModel.getTask;
const main_content = document.querySelector("body");
main_content.appendChild(taskDetail(task));

const name = document.getElementById("name");
const anotations = document.getElementById("anotations");
const date = document.getElementById("date");
const button_completed_task = document.querySelector(".task-checkbox");

window.addEventListener("input", () => {
    console.log(date.value);
    taskViewModel.editTask(task, name.value, anotations.value, date.value);
})

document.querySelector(".fa-trash").addEventListener("click", () => {
    taskViewModel.removeTask(task);
    window.location.href = "../../../index.html";

})

button_completed_task.addEventListener('click', (event) => {
      taskDetailViewModel.completedTask(task);
      location.reload();
})


//entender window, console