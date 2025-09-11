import { UiElements, MockupElements } from "./elements";
import { TaskCard } from "../../components/task";
import { h } from "../../../h";

export class HeaderUi {
  static showDropDown() {
    UiElements.settings_drop_down.classList.toggle("is-active");
  }
}

export class FormUi {
  static showForm() {
    UiElements.add_task.style.display = "none";
    UiElements.main_form.style.display = "flex";
  }

  static hideForm() {
    UiElements.add_task.style.display = "flex";
    UiElements.main_form.style.display = "none";
  }
}

export class TaskUi {
  constructor(viewModel) {
    this.viewModel = viewModel;
  }

  showCompletedTasks() {
    if (
      UiElements.completed_tasks.style.display == "none" ||
      UiElements.completed_tasks.style.display == ""
    ) {
      UiElements.completed_tasks.style.display = "flex";
      UiElements.button_completed_tasks.innerHTML = `<span class="fa-solid fa-chevron-down"></span> Concluídas`;
    } else {
      UiElements.completed_tasks.style.display = "none";
      UiElements.button_completed_tasks.innerHTML = `<span class="fa-solid fa-chevron-right"></span> Concluídas`;
    }
  }

  renderTask(completed = false) {
    if (!completed) UiElements.main_tasks.innerHTML = "";
    else UiElements.completed_tasks.innerHTML = "";

    this.viewModel.loadTasks().forEach((task) => {
      this.createTemplateTask(task, task.completed);
    });
  }

  createTemplateTask(task, completed = false) {
    const taskCard = <TaskCard task={task}/>
    const taskButton = taskCard.querySelector(".task-checkbox")
    if (!completed) UiElements.main_tasks.appendChild(taskCard);
    else {
      UiElements.completed_tasks.appendChild(taskCard);
 
    }

    taskButton.addEventListener("click", (event) => {
      this.viewModel.completedTask(task);
      location.reload();
    });
  }
}
