import { TaskUi } from "../listTaskUI";


export class ListTaskUi extends TaskUi {
  constructor(listViewModel, detailViewModel) {
    super(listViewModel, detailViewModel);

  }

  /**
   * renderTask(key)
   * ----------------
   * Renderiza todas as tasks do grupo, separando concluídas e ativas.
   */
  async renderTask(key, groupId, cached=false) {
    UiElements.main_tasks.innerHTML = "";
    UiElements.completed_tasks.innerHTML = "";

    const tasks = await this.listViewModel.load(groupId, cached)
    
    tasks.forEach((task) => {
      this.createTemplateTask(task, task.completed, key, groupId);
    });

    this.notify()
  }
}