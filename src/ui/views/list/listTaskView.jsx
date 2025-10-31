import { h } from "../../../h";
import { copyListTasks } from "../../../utils/sendTasks";

/**
 * ListTaskView
 * ----------------
 * Classe que coordena toda a interface da lista de tarefas,
 * manipulando UI, Mockup, Form e Header.
 */

export class ListTaskView {
  constructor(group, {viewModels = {}, uis = {}, components = {}, styles={}, config }) {
    this.viewModels = viewModels;
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

    const form = document.querySelector(`.${this.styles.groupForm.container}`);

    document.getElementById("cancel")?.addEventListener("click", () => {
      form.style.display = "none";
    });

    window.addEventListener("scroll", () => {
      const header = document.querySelector(".main-header");
      if (window.scrollY > 45) header?.classList.add("is-shrink");
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

    document.querySelectorAll(`.${this.styles.groupForm.colorContent}`)
      .forEach((colorEl) => {
        colorEl.addEventListener("click", (event) => {
          const color = event.target.dataset.color;
          document.documentElement.style.setProperty("--main-color", color);
          this.color = color;
        });
      });

  }

  bindViewModelsEvents(key){

    this.viewModels.groupVM.subscribe(() => {
      location.reload()
    })
    document.getElementById("create")?.addEventListener("click", async () => {
      this.viewModels.groupVM.edit(
        this.group,
        {
          name: document.getElementById("group").value,
          color: this.color,
          icon: Array.from(document.querySelector(".icon").classList)
                      .slice(0, 2)
                      .join(" ") 
        }
      );
    });


    this.viewModels.taskCreateVM.subscribe(() => {
      this.uis.FormUi.hideForm();
      this.uis.taskUI.renderTask(key, this.group.id);
      
    });
    
    this.uis.UiElements.send_task.addEventListener("click", async () => {
      this.uis.UiElements.settings.setAttribute("disabled", "false");

      const value = this.uis.UiElements.task.value.trim();
      
      await this.viewModels.taskCreateVM.create(value, this.group.id)
    
    });

    document.getElementById("deleteGroup")?.addEventListener("click", async () => {
      await this.viewModels.groupVM.remove(key);
      location.replace(this.config.get("routers").home);
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
    this.uis.theme(key, this.color);
    
    this.uis.UiElements.main_content.prepend(<this.components.groupForm method={"put"} />);
    
    let dropDown = <this.components.groupDropDown />;
    if (this.config.get("mainGroups").includes(key)) {
      dropDown = <this.components.DropDown />;
    }
    
    const header = <this.components.Header title={this.group?.name} dropDown={dropDown} href={this.config.get("routers").home} />;
    this.uis.UiElements.main_content.appendChild(header);
    this.uis.UiElements.main_content.appendChild(this.components.ButtonAddTask());
    this.uis.UiElements.main_content.appendChild(this.components.Form((e) => {e.preventDefault()}));
    
    if (document.querySelector(".icon")  && this.group){
      document.querySelector(".icon").classList = `${this.group.icon} icon`
    }
    
    
    this.bindViewModelsEvents(key)
    this.bindUiEvents();
    await this.uis.taskUI.renderTask(key, this.group.id);
    this.uis.linesRenderer();
  }
}
