import { h } from "../../../h";
import { copyListTasks } from "../../../utils/sendTasks";

/**
 * ListTaskView
 * ----------------
 * Classe que coordena toda a interface da lista de tarefas,
 * manipulando UI, Mockup, Form e Header.
 */

export class TaskView {
  constructor(group, edit, {viewModels = {}, uis = {}, components = {}, styles={}, config }) {
    this.viewModels = viewModels;
    this.edit = edit;
    this.uis = uis;
    this.components = components;
    this.config = config;
    this.styles = styles;
    this.group = group;
    this.color = this.group?.color;
  }

  /**
   * bindEvents(key)
   * ----------------
   * Liga todos os eventos da UI (formulário, botões, scroll, tema, etc)
   * 
   */
  bindUiEvents() {

    this.uis.UiElements.add_task.addEventListener("click", () => {
      this.uis.UiElements.settings.setAttribute("disabled", "true");
      this.uis.FormUi.showForm();
    });

    this.uis.UiElements.button_completed_tasks.addEventListener("click", () => {
      this.uis.taskUI.showCompletedTasks();
      this.uis.linesRenderer();
    });

    this.uis.UiElements.settings.addEventListener("click", () => {
      this.uis.HeaderUi.showDropDown();
    });

    window.addEventListener("scroll", () => {
      const header = document.querySelector(".main-header");
      if (window.scrollY > 45) header?.classList.add("is-shrink");
      else header?.classList.remove("is-shrink");
    });

    document
      .getElementById("changeThemeButton")
      ?.addEventListener("click", () => {
        throw Error("Not iplemented")
      });
  }

  bindViewModelsEvents(key){

    this.viewModels.taskCreateVM.subscribe(() => {
      this.uis.taskUI.renderTask(key, this.group.id, true);
      
    });
    
    this.uis.UiElements.send_task.addEventListener("click", async () => {
      this.uis.UiElements.settings.setAttribute("disabled", "false");

      const value = this.uis.UiElements.task.value.trim();
      this.uis.FormUi.hideForm();
      this.viewModels.taskCreateVM.create(value, this.group.id);
    
    });

    document?.getElementById("sendCopy")?.addEventListener("click", async () => {
      copyListTasks(await this.viewModels.taskListVM.load(this.group.id), this.group.name)
    })
    }

  
  /**
   * render(key)
   * ----------------
   * Renderiza toda a interface da lista.
   */
  async render(key) {
    this.uis.theme(this.color);
    
    let dropDown = <this.components.DropDown />;
    const header = <this.components.Header title={this.group.name} dropDown={dropDown} href={this.config.get("routers").home} />;
    this.uis.UiElements.main_content.appendChild(header);
     this.uis.UiElements.main_content.appendChild(this.components.Form((e) => {e.preventDefault()}));
    this.uis.UiElements.main_content.appendChild(this.components.ButtonAddTask());
    

    this.bindViewModelsEvents(key)
    this.bindUiEvents();

    this.uis.taskUI.subscribe(() => {
      this.uis.linesRenderer();
    })
    this.uis.taskUI.renderTask(key, this.group.id);
    
  }
}
