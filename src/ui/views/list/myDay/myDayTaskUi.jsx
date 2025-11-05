import { TaskUi } from "../listTaskUI";
import { UiElements } from "../elements";
import { TaskCard } from "../../../components/task";
import { h } from "../../../../h";

export class MyDayTaskUi extends TaskUi {
  constructor(listViewModel, detailViewModel) {
    super(listViewModel, detailViewModel);

  }

  /**
   * renderTask(key)
   * ----------------
   * Renderiza todas as tasks do grupo, separando concluídas e ativas.
   */
  async renderTask(key, cached=false) {
    UiElements.main_tasks.innerHTML = "";
    UiElements.completed_tasks.innerHTML = "";

    const load = await this.listViewModel.load(cached);
    const tasks = load.filter(task => task.my_day === true)

    tasks.forEach((task) => {
      this.createTemplateTask(task, task.completed, key, cached);
    });

    this.notify()
  }

  createTemplateTask(task, completed = false, key, cached=false) {
      const taskCard = <TaskCard task={task} key={key}/>;
      const taskButton = taskCard.querySelector(".task-checkbox");
  
      if (!completed) UiElements.main_tasks.appendChild(taskCard);
      else UiElements.completed_tasks.appendChild(taskCard);
  
      const favorite = taskCard.querySelector("#favorite")
      favorite.addEventListener("click", () => {
        this.detailViewModel.favoritedTask(task);
        this.renderTask(key, cached, true);
      })
  
      taskButton.addEventListener("click", () => {
        this.detailViewModel.completedTask(task);
        if (task.completed){
          const audio = new Audio("./completedTaskSound.mp3")
          audio.play()
        }
        this.renderTask(key, cached);
      });
    }
}