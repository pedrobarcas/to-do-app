import { UiElements } from "./elements";
import { TaskCard } from "../../components/task";
import { h } from "../../../h";

/**
 * HeaderUi
 * ----------------
 * Classe estática para manipulação do menu de configurações
 */
export class HeaderUi {
  static showDropDown() {
    UiElements.settings_drop_down.classList.toggle("is-active");
  }
}

/**
 * FormUi
 * ----------------
 * Classe estática para manipular o formulário de criação de tarefa
 */
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

/**
 * TaskUi
 * ----------------
 * Responsável por renderizar tasks, tanto ativas quanto concluídas,
 * e ligar eventos de checkbox para completar tarefas.
 */
export class TaskUi {
  constructor(listViewModel, detailViewModel) {
    this.listViewModel = listViewModel;
    this.detailViewModel = detailViewModel;
  }

  /**
   * showCompletedTasks()
   * Alterna a visibilidade das tarefas concluídas.
   */
  showCompletedTasks() {
    if (UiElements.completed_tasks.style.display === "none" || UiElements.completed_tasks.style.display === "") {
      UiElements.completed_tasks.style.display = "flex";
      UiElements.button_completed_tasks.innerHTML = `<span class="fa-solid fa-chevron-down"></span> Concluídas`;
    } else {
      UiElements.completed_tasks.style.display = "none";
      UiElements.button_completed_tasks.innerHTML = `<span class="fa-solid fa-chevron-right"></span> Concluídas`;
    }
  }

  /**
   * renderTask(key)
   * ----------------
   * Renderiza todas as tasks do grupo, separando concluídas e ativas.
   */
  renderTask(key) {
    UiElements.main_tasks.innerHTML = "";
    UiElements.completed_tasks.innerHTML = "";

    this.listViewModel.load().forEach((task) => {
      this.createTemplateTask(task, task.completed, key);
    });
  }

  /**
   * createTemplateTask(task, completed, key)
   * ----------------
   * Cria o card da task e adiciona eventos.
   */
  createTemplateTask(task, completed = false, key) {
    const taskCard = <TaskCard task={task} key={key}/>;
    const taskButton = taskCard.querySelector(".task-checkbox");

    if (!completed) UiElements.main_tasks.appendChild(taskCard);
    else UiElements.completed_tasks.appendChild(taskCard);

    taskButton.addEventListener("click", () => {
      this.detailViewModel.completedTask(task);
      if (task.completed){
        const audio = new Audio("./completedTaskSound.mp3")
        audio.play()
      }
      this.renderTask(key); // Atualiza toda a lista de forma fluida
    });
  }
}
