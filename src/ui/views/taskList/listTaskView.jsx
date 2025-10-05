import { h } from "../../../h";
/**
 * ListTaskView
 * ----------------
 * Classe que coordena toda a interface da lista de tarefas,
 * manipulando UI, Mockup, Form e Header.
 */

export class ListTaskView {
  constructor(key, {viewModels = {}, uis = {}, components = {}, config }) {
    this.viewModels = viewModels;
    this.uis = uis;
    this.components = components;
    this.config = config;
    this.color = this.viewModels.groupVM.find(key)?.color;
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
      this.uis.linesRenderer()
    });

    this.uis.UiElements.settings.addEventListener("click", () => {
      this.uis.HeaderUi.showDropDown();
    });

    const form = document.querySelector(".todo__form--container");

    document.getElementById("cancel")?.addEventListener("click", () => {
      form.style.display = "none";
    });

    window.addEventListener("scroll", () => {
      const header = document.querySelector(".main-header");
      if (window.scrollY > 50) header?.classList.add("is-shrink");
      else header?.classList.remove("is-shrink");
    });

    document
      .getElementById("changeThemeButton")
      ?.addEventListener("click", () => {
        this.uis.UiElements.main_content.classList.toggle("light-theme");
      });

    document.getElementById("editGroup")?.addEventListener("click", () => {
      form.style.display = "flex";
    });

    document.querySelectorAll(".todo__form--color-content")
      .forEach((colorEl) => {
        colorEl.addEventListener("click", (event) => {
          const color = event.target.dataset.color;
          document.documentElement.style.setProperty("--main-color", color);
          this.color = color;
        });
      });

  }

  bindViewModelsEvents(key){
    const form = document.querySelector(".todo__form--container");

    this.viewModels.groupVM.subscribe((group) => {
      location.href = this.config.get("routers").list.concat(`?key=${group.name}`)
    })

    document.getElementById("create")?.addEventListener("click", () => {
      this.viewModels.groupVM.edit(this.viewModels.groupVM.find(key), {
        id: document.getElementById("group").value,
        name: document.getElementById("group").value,
        color: this.color,
        icon: Array.from(document.querySelector(".icon").classList).slice(0, 2).join(" ") 
      });

    });

    this.viewModels.taskCreateVM.subscribe(() => {
      this.uis.FormUi.hideForm();
      this.uis.taskUI.renderTask(key);
      
    });
    
    this.uis.UiElements.send_task.addEventListener("click", () => {
      this.uis.UiElements.settings.setAttribute("disabled", "false");

      const value = this.uis.UiElements.task.value.trim();
      
      this.viewModels.taskCreateVM.create(value);

    });

    document.getElementById("deleteGroup")?.addEventListener("click", () => {
      this.viewModels.groupVM.remove(key);
      location.href = this.config.get("routers").home;
    });
  }


  /**
   * render(key)
   * ----------------
   * Renderiza toda a interface da lista.
   */
  render(key) {
    this.uis.taskUI.renderTask(key);
    this.uis.theme(key, this.color);
    
    this.uis.UiElements.main_content.prepend(<this.components.groupForm method={"puta"} />);
    
    let dropDown = <this.components.groupDropDown />;
    if (this.config.get("mainGroups").includes(key)) {
      dropDown = <this.components.DropDown />;
    }
    
    const header = <this.components.Header title={key} dropDown={dropDown} />;
    this.uis.UiElements.main_content.appendChild(header);
    this.uis.UiElements.main_content.appendChild(this.components.ButtonAddTask());
    this.uis.UiElements.main_content.appendChild(this.components.Form());
    if (document.querySelector(".icon")){
      document.querySelector(".icon").classList = `${this.viewModels.groupVM.find(key)?.icon} icon`
    }

    this.uis.linesRenderer();
    this.bindUiEvents();
    this.bindViewModelsEvents(key)
  }
}
