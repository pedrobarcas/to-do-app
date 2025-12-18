import { h } from "../../../../h";
import { TaskView } from "../TaskView";

/**
 * ListTaskView
 * ----------------
 * Classe que coordena toda a interface da lista de tarefas,
 * manipulando UI, Mockup, Form e Header.
 */

export class ListTaskView extends TaskView {
  constructor(group, edit, {viewModels = {}, uis = {}, components = {}, styles={}, config }) {
    super(group, edit, {viewModels, uis, components, styles, config})
  }

  bindUiEvents() {
    super.bindUiEvents()
    const form = document.querySelector(`.${this.styles.groupForm.container}`);

    document.getElementById("cancel").addEventListener("click", () => {
      form.style.display = "none";
    });

    console.log(this.group)


    document.getElementById("editGroup").addEventListener("click", () => {
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
    super.bindViewModelsEvents(key)

    this.viewModels.groupVM.subscribe(() => {
      localStorage.removeItem(this.group.id)
      location.reload()
    })
    document.getElementById("create").addEventListener("click", async () => {
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

    document.getElementById("deleteGroup").addEventListener("click", async () => {
      await this.viewModels.groupVM.remove(key);
      location.replace(this.config.get("routers").home);
    });

    }

  async render(key) {
    this.uis.UiElements.main_content.prepend(<this.components.groupForm method={"put"} />);
    
    if (this.edit){
      document.querySelector(`.${this.styles.groupForm.container}`).style.display = "flex";
    }
    
    document.querySelector(".icon").classList = `${this.group.icon} icon`
    document.getElementById("group").value = this.group.name
    super.render(key)
  }
}
