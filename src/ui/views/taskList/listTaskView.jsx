/**
 * ListTaskView
 * ----------------
 * Classe que coordena toda a interface da lista de tarefas,
 * manipulando UI, Mockup, Form e Header.
 */
export class ListTaskView {
  constructor(
    taskCreateVM,
    taskUI,
    UiElements,
    MockupElements,
    FormUi,
    HeaderUi,
    MockupUi,
    Header,
    ButtonAddTask,
    Form
  ) {
    this.taskCreateVM = taskCreateVM;
    this.taskUi = taskUI;
    this.UiElements = UiElements;
    this.MockupElements = MockupElements;
    this.FormUi = FormUi;
    this.HeaderUi = HeaderUi;
    this.MockupUi = MockupUi;
    this.Header = Header;
    this.ButtonAddTask = ButtonAddTask;
    this.Form = Form;
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

    window.addEventListener('scroll', () => {
      const header = document.querySelector('.main-header');
      if (window.scrollY > 50) header?.classList.add('is-shrink');
      else header?.classList.remove('is-shrink');
    });

    document.getElementById("changeThemeButton").addEventListener('click', () => {
      this.UiElements.main_content.classList.toggle("light-theme");
    });

    window.addEventListener('load', () => {
      if (!this.UiElements.main_tasks.innerHTML && window.getComputedStyle(this.UiElements.completed_tasks).display === 'none') {
        this.MockupElements.mockup.appendChild(this.MockupUi.showMockup());
      } else this.MockupUi.hideMockup();
    });
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
    this.UiElements.main_content.appendChild(this.Form());
    this.UiElements.main_content.appendChild(this.Header(key));
    this.UiElements.main_content.appendChild(this.ButtonAddTask());

    this.taskUi.renderTask(key);
    this.theme(key);
    this.bindEvents(key);
  }
}
