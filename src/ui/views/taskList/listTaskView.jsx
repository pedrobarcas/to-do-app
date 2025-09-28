/**
 * ListTaskView
 * ----------------
 * Classe que coordena toda a interface da lista de tarefas,
 * manipulando UI, Mockup, Form e Header.
 */

import { h } from "../../../h";

export class ListTaskView {
  constructor({ viewModels = {}, uis = {}, components = {}, config }) {
    this.viewModels = viewModels;
    this.uis = uis;
    this.components = components;
    this.config = config;
    this.color = null;
  }

  /**
   * theme(key)
   * ----------------
   * Aplica tema de acordo com o grupo selecionado.
   */
  theme(key) {
    const { UiElements } = this.uis;
    const { groupVM } = this.viewModels;

    const themes = {
      Importante: "pink-theme",
      "Meu Dia": "green-theme",
    };

    const themeClass = themes[key];
    if (themeClass) UiElements.main_content.classList.add(themeClass);

    this.color = groupVM.find(key)?.color;

    if (this.color) {
      document.documentElement.style.setProperty("--main-color", this.color);
    }
  }

  /**
   * bindEvents(key)
   * ----------------
   * Liga todos os eventos da UI (formulário, botões, scroll, tema, etc)
   */
  bindEvents(key) {
    const { UiElements, FormUi, HeaderUi, taskUI } = this.uis;
    const { groupVM, taskCreateVM } = this.viewModels;

    UiElements.add_task.addEventListener("click", () => {
      UiElements.settings.setAttribute("disabled", "true");
      FormUi.showForm();
    });

    UiElements.send_task.addEventListener("click", () => {
      UiElements.settings.setAttribute("disabled", "false");

      const value = UiElements.task.value.trim();
      if (!value) return;

      taskCreateVM.create(value);
      FormUi.hideForm();
      taskUI.renderTask(key);
    });

    UiElements.button_completed_tasks.addEventListener("click", () => {
      taskUI.showCompletedTasks();
    });

    UiElements.settings.addEventListener("click", () => {
      HeaderUi.showDropDown();
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
        UiElements.main_content.classList.toggle("light-theme");
      });

    document.getElementById("deleteGroup")?.addEventListener("click", () => {
      groupVM.remove(key);
      location.href = "index.html";
    });

    document.getElementById("editGroup")?.addEventListener("click", () => {
      form.style.display = "flex";
    });

    document
      .querySelectorAll(".todo__form--color-content")
      .forEach((colorEl) => {
        colorEl.addEventListener("click", (event) => {
          const color = event.target.dataset.color;
          document.documentElement.style.setProperty("--main-color", color);
          this.color = color;
        });
      });

    document.getElementById("create")?.addEventListener("click", () => {
      groupVM.edit(groupVM.find(key), {
        id: document.getElementById("group").value,
        name: document.getElementById("group").value,
        color: this.color,
      });

      form.style.display = "none";
    });
  }

  /**
   * render(key)
   * ----------------
   * Renderiza toda a interface da lista.
   */
  render(key) {
    const { taskUI, UiElements } = this.uis;
    const {
      Header,
      ButtonAddTask,
      Form,
      DropDown,
    } = this.components;

    taskUI.renderTask(key);
    this.theme(key);

    UiElements.main_content.prepend(<this.components.groupForm method={"puta"} />);

    let dropDown = <this.components.groupDropDown />;
    if (this.config.get("mainGroups").includes(key)) {
      dropDown = <DropDown />;
    }

    const header = <Header title={key} dropDown={dropDown} />;
    UiElements.main_content.appendChild(header);
    UiElements.main_content.appendChild(ButtonAddTask());
    UiElements.main_content.appendChild(Form());

    this.bindEvents(key);
  }
}
