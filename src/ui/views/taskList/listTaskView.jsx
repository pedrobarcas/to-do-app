/**
 * ListTaskView
 * ----------------
 * Classe que coordena toda a interface da lista de tarefas,
 * manipulando UI, Mockup, Form e Header.
 */

import { h } from "../../../h";

export class ListTaskView {
  constructor(
    groupVM,
    taskCreateVM,
    taskUI,
    UiElements,
    FormUi,
    HeaderUi,
    Header,
    ButtonAddTask,
    Form,
    dropDown,
    groupForm
  ){
    this.groupVM = groupVM;
    this.taskCreateVM = taskCreateVM;
    this.taskUi = taskUI;
    this.UiElements = UiElements;
    this.FormUi = FormUi;
    this.HeaderUi = HeaderUi;
    this.Header = Header;
    this.ButtonAddTask = ButtonAddTask;
    this.Form = Form;
    this.DropDown = dropDown;
    this.groupForm = groupForm
  }

  /**
   * theme(key)
   * ----------------
   * Aplica tema de acordo com o grupo selecionado.
   */
  theme(key) {

    const themes = {
      "Importante": "pink-theme",
      "Meu Dia": "green-theme",
    };
    const themeClass = themes[key];
    if (themeClass) this.UiElements.main_content.classList.add(themeClass);

    this.color = this.groupVM.find(key)?.color

    if (this.color){
      document.documentElement.style.setProperty("--main-color", this.color)
    }

  }

  /**
   * bindEvents(key)
   * ----------------
   * Liga todos os eventos da UI (formulário, botões, scroll, tema, etc)
   */
  bindEvents(key) {
    this.UiElements.add_task.addEventListener('click', () => {
      this.UiElements.settings.setAttribute('disabled', 'true');
      this.FormUi.showForm();
    });

    this.UiElements.send_task.addEventListener('click', () => {
      this.UiElements.settings.setAttribute('disabled', 'false');

      const value = this.UiElements.task.value.trim();
      if (!value) return; // evita criar task vazia

      this.taskCreateVM.create(value);
      this.FormUi.hideForm();
      this.taskUi.renderTask(key); // atualiza a lista de tarefas
    });

    this.UiElements.button_completed_tasks.addEventListener('click', () => {
      this.taskUi.showCompletedTasks();
    });

    this.UiElements.settings.addEventListener('click', () => {
      this.HeaderUi.showDropDown();
    });

    const form = document.querySelector('.todo__form--container');
    document.getElementById('cancel').addEventListener('click', () => {
            form.style.display = 'none'
        })

    window.addEventListener('scroll', () => {
      const header = document.querySelector('.main-header');
      if (window.scrollY > 50) header?.classList.add('is-shrink');
      else header?.classList.remove('is-shrink');
    });

    document.getElementById("changeThemeButton").addEventListener('click', () => {
      this.UiElements.main_content.classList.toggle("light-theme");
    });

    document.getElementById("deleteGroup").addEventListener('click', () => {
      this.groupVM.remove(key)
      location.href = 'index.html'
    })

    document.getElementById('editGroup').addEventListener('click', () => {
      form.style.display = 'flex'
    })

    document.querySelectorAll(".todo__form--color-content").forEach(color => {
      color.addEventListener('click', (event) => {
        const color = event.target.dataset.color
        document.documentElement.style.setProperty("--main-color", color)
        this.color = color
      })
    })

    document.getElementById("create").addEventListener('click', () => {
      this.groupVM.edit(this.groupVM.find(key), {
        id: document.getElementById("group").value,
        name: document.getElementById("group").value,
        color: this.color
      })

      form.style.display = 'none'
    })

  }

  /**
   * render(key)
   * ----------------
   * Renderiza toda a interface da lista:
   * - Formulário
   * - Header
   * - Botão adicionar
   * - Lista de tasks
   * - Aplica tema
   * - Liga eventos
   */
  render(key) {
  

  this.taskUi.renderTask(key);
  this.theme(key);
  this.UiElements.main_content.prepend(<this.groupForm method={'puta'}/>)
  
  const header = <this.Header title={key} dropDown={<this.DropDown />} />

  this.UiElements.main_content.appendChild(header);
  this.UiElements.main_content.appendChild(this.ButtonAddTask());
  this.UiElements.main_content.appendChild(this.Form())
  this.bindEvents(key);
  
}
}
