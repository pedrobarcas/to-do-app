import { O as Observable, o as onAuthStateChanged, a as auth, q as queryParams, b as packingDependecyTaskFirestore, p as packingDependecyTask, d as packingDependecyFirestore, s as service, c as configService } from "./index-DaKAbugg.js";
/* empty css                */
/* empty css               */
import "./private-check-DBjYSvOy.js";
import { T as TaskCard, a as TaskDetailViewModel } from "./taskDetailViewModel-BRpk_kPL.js";
import { h } from "./h-DjMzbvrD.js";
import { s as styles, v as v4, D as DateFormat, L as ListViewModel } from "./groupForm.module-BHTGuUxd.js";
const must = (el, name) => {
  if (!el) throw new Error(`Elemento ${name} não encontrado`);
  return el;
};
const Elements = (root = document) => ({
  get task() {
    return must(root.getElementById("task"), "Input da Tarefa");
  },
  get main_content() {
    return must(root.querySelector(".main-content"), "Conteúdo principal");
  },
  get main_completed_tasks() {
    return must(root.querySelector(".main-drop-down-task"), "Seção principal de tarefas concluídas");
  },
  get completed_tasks() {
    return must(root.querySelector(".drop-down-task"), "Lista de tarefas concluídas");
  },
  get main_tasks() {
    return must(root.querySelector(".main-tasks"), "Lista de tarefas ativas");
  },
  get add_task() {
    return must(root.querySelector(".add-task"), "Botão de adicionar tarefa");
  },
  get main_form() {
    return must(root.querySelector(".main-form"), "Formulário principal");
  },
  get send_task() {
    return must(root.getElementById("send-task"), "Botão de envio da tarefa");
  },
  get button_completed_tasks() {
    return must(root.getElementById("button-completed-tasks"), "Botão de exibir tarefas concluídas");
  },
  get task_checkbox() {
    return root.querySelectorAll(".task-checkbox");
  },
  get tasks() {
    return root.querySelectorAll(".tasks");
  },
  get settings() {
    return must(root.getElementById("settings"), "Botão de configurações");
  },
  get settings_drop_down() {
    return must(root.querySelector(".settings-drop-down"), "Menu de configurações");
  }
});
const UiElements = Elements();
class HeaderUi {
  static showDropDown() {
    UiElements.settings_drop_down.classList.toggle("is-active");
  }
}
class FormUi {
  static showForm() {
    UiElements.add_task.style.display = "none";
    UiElements.main_form.style.display = "flex";
  }
  static hideForm() {
    UiElements.add_task.style.display = "flex";
    UiElements.main_form.style.display = "none";
  }
}
class TaskUi extends Observable {
  constructor(listViewModel2, detailViewModel) {
    super();
    this.listViewModel = listViewModel2;
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
  async renderTask(key2, groupId, cached = false) {
    UiElements.main_tasks.innerHTML = "";
    UiElements.completed_tasks.innerHTML = "";
    const tasks = await this.listViewModel.load(groupId, cached);
    tasks.forEach((task) => {
      this.createTemplateTask(task, task.completed, key2, groupId);
    });
    this.notify();
  }
  /**
   * createTemplateTask(task, completed, key)
   * ----------------
   * Cria o card da task e adiciona eventos.
   */
  createTemplateTask(task, completed = false, key2, groupId, cached = false) {
    const taskCard = /* @__PURE__ */ h(TaskCard, { task, key: key2 });
    const taskButton = taskCard.querySelector(".task-checkbox");
    if (!completed) UiElements.main_tasks.appendChild(taskCard);
    else UiElements.completed_tasks.appendChild(taskCard);
    const favorite = taskCard.querySelector("#favorite");
    favorite.addEventListener("click", () => {
      this.detailViewModel.favoritedTask(task);
      this.renderTask(key2, groupId, cached, true);
    });
    taskButton.addEventListener("click", () => {
      this.detailViewModel.completedTask(task);
      if (task.completed) {
        const audio = new Audio("./completedTaskSound.mp3");
        audio.play();
      }
      this.renderTask(key2, groupId, cached, true);
    });
  }
}
function SettingsDropDown() {
  return /* @__PURE__ */ h("div", { className: "settings-drop-down" }, /* @__PURE__ */ h("div", { id: "changeThemeButton", className: "drop-down-content" }, /* @__PURE__ */ h(
    "span",
    {
      className: "fa-solid fa-palette",
      "aria-label": "Botão para alterar o tema da lista atual"
    }
  ), /* @__PURE__ */ h("strong", null, "Alterar tema")), /* @__PURE__ */ h("div", { id: "sendCopy", className: "drop-down-content" }, /* @__PURE__ */ h("span", { className: "fa-solid fa-copy", "aria-label": "Botão para enviar uma cópia da lista de tarefas atual" }), /* @__PURE__ */ h("strong", null, "Enviar uma cópia")));
}
function MainHeader({ title, dropDown, href }) {
  return /* @__PURE__ */ h("header", { className: "main-header" }, /* @__PURE__ */ h("a", { className: "fa-solid fa-arrow-left", href }), /* @__PURE__ */ h("h1", null, title), /* @__PURE__ */ h("div", { id: "settings", className: "fa-solid fa-ellipsis-vertical" }), /* @__PURE__ */ h("div", { className: "main-settings" }), dropDown);
}
function AddTask() {
  return /* @__PURE__ */ h("section", { className: "add-task" }, /* @__PURE__ */ h("button", null, "+"));
}
function MainForm(handle) {
  return /* @__PURE__ */ h("form", { className: "main-form", onSubmit: handle }, /* @__PURE__ */ h("div", { className: "content-form" }, /* @__PURE__ */ h("button", { className: "circle-button" }), /* @__PURE__ */ h("input", { type: "text", placeholder: "Sua tarefa", id: "task" }), /* @__PURE__ */ h("button", { title: "Botão de adicionar tarefa", id: "send-task", className: "send-button", type: "submit" }, /* @__PURE__ */ h(
    "span",
    {
      className: "fa-solid fa-arrow-up",
      "aria-label": "imagem ilustrativa de inclusão de uma tarefa"
    }
  ))));
}
function listColor() {
  return /* @__PURE__ */ h("div", { className: styles.selectColor }, [
    "#778cdd",
    "#f2b7c1",
    "#437d89",
    "#f4a261",
    "#e76f51",
    "#9b5de5"
  ].map((color) => /* @__PURE__ */ h(
    "div",
    {
      key: color,
      dataset: { color },
      className: styles.colorContent,
      style: { backgroundColor: color }
    }
  )));
}
function listIcons() {
  const icons = [
    "fa-bars",
    "fa-star",
    "fa-heart",
    "fa-gift",
    "fa-tag",
    "fa-book",
    "fa-pen-to-square",
    "fa-trash",
    "fa-folder",
    "fa-code",
    "fa-thumbtack",
    "fa-users",
    "fa-flask",
    "fa-briefcase",
    "fa-cart-shopping",
    "fa-dumbbell",
    "fa-moon",
    "fa-sun"
  ];
  return /* @__PURE__ */ h("div", { className: styles.listIcons, onClick: selectIcon }, icons.map((icon) => /* @__PURE__ */ h("span", { key: icon, className: `fa-solid ${icon}` })));
}
function GroupForm(method) {
  const isEdit = method && method.method !== "post";
  const title = isEdit ? "Renomear lista" : "Nova lista";
  const message = isEdit ? "SALVAR" : "CRIAR LISTA";
  return /* @__PURE__ */ h("form", { className: styles.container }, /* @__PURE__ */ h("div", { className: styles.content }, /* @__PURE__ */ h("p", { className: styles.title }, title), /* @__PURE__ */ h("div", { className: styles.input }, /* @__PURE__ */ h("label", { htmlFor: "group", role: "button", tabIndex: "0", onClick: showListIcon }, /* @__PURE__ */ h(
    "span",
    {
      className: "fa-regular fa-face-smile icon",
      style: { color: "var(--main-color)" }
    }
  )), /* @__PURE__ */ h(
    "input",
    {
      type: "text",
      name: "group",
      id: "group",
      placeholder: "Inserir o título da lista",
      className: styles.group
    }
  )), /* @__PURE__ */ h("div", { className: styles.personalizationContent }, /* @__PURE__ */ h("div", { className: styles.personalization }, "Cor"), listColor()), listIcons(), /* @__PURE__ */ h("div", { className: styles.actions }, /* @__PURE__ */ h("button", { id: "cancel", tabIndex: 1, type: "button", className: styles.button }, "CANCELAR"), /* @__PURE__ */ h("button", { id: "create", tabIndex: 0, type: "button", className: styles.button }, message))));
}
function showListIcon() {
  const personalization = document.querySelector(`.${styles.personalizationContent}`);
  const list = document.querySelector(`.${styles.listIcons}`);
  if (personalization.style.display === "flex") {
    personalization.style.display = "none";
    list.style.display = "flex";
  } else {
    personalization.style.display = "flex";
    list.style.display = "none";
  }
}
function selectIcon() {
  const icons = document.querySelector(`.${styles.listIcons}`).querySelectorAll("*");
  icons.forEach((el) => {
    el.addEventListener("click", (e) => {
      icons.forEach((icon) => icon.classList.remove("is-selected"));
      e.target.classList.add("is-selected");
      document.querySelector(".icon").classList = `${e.target.classList} icon`;
    });
  });
}
async function sendCopy(text) {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Lista de tarefas",
        text
      });
    } catch (err) {
      console.error("Erro ao compartilhar:", err);
    }
  } else {
    alert("Seu navegador não suporta compartilhamento nativo");
  }
}
function copyListTasks(tasks, title) {
  let tasksCopy = `${title}
`;
  const tasksNotCompleted = [];
  const tasksCompleted = [];
  tasks.forEach((task) => {
    if (!task.completed) {
      tasksNotCompleted.push(task);
    } else {
      tasksCompleted.push(task);
    }
  });
  tasksNotCompleted.forEach((task) => {
    tasksCopy += `○ ${task.name}
`;
    tasksCopy += "\n Concluidas:\n";
    tasksCompleted.forEach((task2) => {
      tasksCopy += `    ● ${task2.name}
`;
    });
  });
  sendCopy(tasksCopy);
}
class TaskView {
  constructor(group2, edit2, { viewModels = {}, uis = {}, components = {}, styles: styles2 = {}, config }) {
    this.viewModels = viewModels;
    this.edit = edit2;
    this.uis = uis;
    this.components = components;
    this.config = config;
    this.styles = styles2;
    this.group = group2;
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
    document.getElementById("changeThemeButton")?.addEventListener("click", () => {
      throw Error("Not iplemented");
    });
  }
  bindViewModelsEvents(key2) {
    this.viewModels.taskCreateVM.subscribe(() => {
      this.uis.taskUI.renderTask(key2, this.group.id, true);
    });
    this.uis.UiElements.send_task.addEventListener("click", async () => {
      this.uis.UiElements.settings.setAttribute("disabled", "false");
      const value = this.uis.UiElements.task.value.trim();
      this.uis.FormUi.hideForm();
      this.viewModels.taskCreateVM.create(value, this.group.id);
    });
    document?.getElementById("sendCopy")?.addEventListener("click", async () => {
      copyListTasks(await this.viewModels.taskListVM.load(this.group.id), this.group.name);
    });
  }
  /**
   * render(key)
   * ----------------
   * Renderiza toda a interface da lista.
   */
  async render(key2) {
    this.uis.theme(this.color);
    let dropDown = /* @__PURE__ */ h(this.components.DropDown, null);
    const header = /* @__PURE__ */ h(this.components.Header, { title: this.group.name, dropDown, href: this.config.get("routers").home });
    this.uis.UiElements.main_content.appendChild(header);
    this.uis.UiElements.main_content.appendChild(this.components.Form((e) => {
      e.preventDefault();
    }));
    this.uis.UiElements.main_content.appendChild(this.components.ButtonAddTask());
    this.bindViewModelsEvents(key2);
    this.bindUiEvents();
    this.uis.taskUI.subscribe(() => {
      this.uis.linesRenderer();
    });
    this.uis.taskUI.renderTask(key2, this.group.id);
  }
}
class GroupViewModel extends Observable {
  /**
   * Cria uma nova instância de GroupViewModel.
   *
   * @constructor
   * @param {Object} repository - Repositório principal responsável pelas operações de persistência de grupos.
   * Deve implementar os métodos `find(key)`, `edit(object)` e `remove(object)`.
   * @param {Object} groupRepository - Repositório auxiliar responsável por relacionamentos ou índices de grupos.
   * Deve implementar o método `remove(key)`.
   * @param {Object} service - Serviço de domínio responsável por aplicar regras de negócio e validações.
   * Deve implementar o método `edit(object, updates)`.
   *
   * @example
   * const vm = new GroupViewModel(groupRepo, subRepo, groupService);
   */
  constructor(repository, groupRepository2, service2) {
    super();
    this.repository = repository;
    this.groupRepository = groupRepository2;
    this.service = service2;
  }
  /**
   * Busca um grupo com base na chave fornecida.
   *
   * @async
   * @param {string} key - Identificador do grupo a ser buscado.
   * @returns {Promise<Object|null>} O grupo encontrado ou `null` caso não exista.
   *
   * @example
   * const group = await vm.find("group-001");
   */
  async find(key2) {
    const resolution = await this.repository.find(key2);
    return resolution;
  }
  /**
   * Remove um grupo e seus vínculos associados.
   *
   * Este método limpa todos os observadores, busca o grupo correspondente e executa 
   * a remoção tanto no repositório principal quanto no auxiliar.  
   * Após a exclusão, notifica todos os observadores informando a chave do grupo removido.
   *
   * @async
   * @param {string} key - Identificador do grupo a ser removido.
   * @returns {Promise<void>}
   *
   * @fires Observable#notify
   * @example
   * await vm.remove("group-123");
   */
  async remove(key2) {
    this.unsubscribeAll();
    const group2 = await this.repository.find(key2);
    await this.repository.remove(group2);
    await this.groupRepository.remove(key2);
    this.notify({ removed: key2 });
  }
  /**
   * Edita um grupo existente aplicando as atualizações informadas.
   *
   * Esse método utiliza o `service` para aplicar regras de negócio,
   * envia as modificações para o repositório e notifica os observadores 
   * com a nova versão do grupo.
   *
   * @async
   * @param {Object} group - Grupo original que será atualizado.
   * @param {Object} [updates={}] - Objeto contendo os campos a serem modificados.
   * @returns {Promise<Object>} O grupo atualizado retornado pelo repositório.
   *
   * @fires Observable#notify
   * @example
   * const updated = await vm.edit(group, { name: "Grupo Atualizado" });
   */
  async edit(group2, updates = {}) {
    const updatedGroup = this.service.edit(group2, updates);
    console.log(updatedGroup);
    const obj = await this.repository.edit(updatedGroup);
    console.log(obj);
    this.notify(updatedGroup);
    return obj;
  }
}
class ListTasksViewModel extends Observable {
  constructor(repository) {
    super();
    this.repository = repository;
  }
  async load(group_id, cached = false) {
    const objects = await this.repository.load(group_id, cached);
    this.notify();
    return objects;
  }
}
class CreateTaskViewModel extends Observable {
  /**
   * Cria uma nova instância do CreateTaskViewModel.
   *
   * @constructor
   * @param {Object} factory - Instância responsável pela criação de objetos Task.
   * Deve expor um método `create(name, userId, groupId)`.
   * @param {Object} repository - Repositório responsável pela persistência das tarefas.
   * Deve expor um método `save(task)` que retorne uma Promise.
   *
   * @example
   * const vm = new CreateTaskViewModel(taskFactory, taskRepository);
   */
  constructor(factory, repository) {
    super();
    this.factory = factory;
    this.repository = repository;
  }
  /**
   * Cria uma nova tarefa associada ao usuário autenticado e a um grupo específico.
   *
   * Este método aguarda a autenticação do Firebase para obter o `userId` e, em seguida,
   * utiliza a `factory` e o `repository` para construir e persistir a nova tarefa.
   * 
   * Após o salvamento bem-sucedido, todos os observadores são notificados via {@link Observable#notify}.
   *
   * @async
   * @param {string|Object} obj - Nome da tarefa ou objeto com dados necessários para criação.
   * @param {string} groupId - Identificador do grupo ao qual a tarefa pertence.
   * @returns {Promise<Object>} Promessa resolvida com o resultado do repositório.
   *
   * @fires Observable#notify
   * @throws {Error} Se ocorrer falha durante a autenticação ou persistência.
   *
   * @example
   * await vm.create("Finalizar documentação", "grupo001");
   */
  async create(obj, groupId) {
    const user = await new Promise((resolve) => {
      onAuthStateChanged(auth, (user2) => {
        if (user2) resolve(user2);
      });
    });
    const object = this.factory.create(obj, user.uid, groupId);
    const resolution = await this.repository.save(object);
    this.notify(object);
    return resolution;
  }
}
class ImportantTaskUi extends TaskUi {
  constructor(listViewModel2, detailViewModel) {
    super(listViewModel2, detailViewModel);
  }
  /**
   * renderTask(key)
   * ----------------
   * Renderiza todas as tasks do grupo, separando concluídas e ativas.
   */
  async renderTask(key2, cached = false) {
    UiElements.main_tasks.innerHTML = "";
    UiElements.completed_tasks.innerHTML = "";
    const load = await this.listViewModel.load(cached);
    const tasks = load.filter((task) => task.favorite === true);
    tasks.forEach((task) => {
      this.createTemplateTask(task, task.completed, key2, cached);
    });
    this.notify();
  }
  createTemplateTask(task, completed = false, key2, cached = false) {
    const taskCard = /* @__PURE__ */ h(TaskCard, { task, key: key2 });
    const taskButton = taskCard.querySelector(".task-checkbox");
    if (!completed) UiElements.main_tasks.appendChild(taskCard);
    else UiElements.completed_tasks.appendChild(taskCard);
    const favorite = taskCard.querySelector("#favorite");
    favorite.addEventListener("click", () => {
      this.detailViewModel.favoritedTask(task);
      this.renderTask(key2, cached, true);
    });
    taskButton.addEventListener("click", () => {
      this.detailViewModel.completedTask(task);
      if (task.completed) {
        const audio = new Audio("./completedTaskSound.mp3");
        audio.play();
      }
      this.renderTask(key2, cached);
    });
  }
}
class Task {
  /**
   * @property {string|number} id - Identificador único da tarefa.
   * @property {string} name - Nome da tarefa.
   * @property {string} description - Descrição detalhada da tarefa.
   * @property {Date} create_date - Data de criação da tarefa.
   * @property {boolean} completed - Indica se a tarefa está concluída.
   * @property {Date|null} date - Data de vencimento/execução (opcional).
   * @property {File|string|null} file - Arquivo associado à tarefa (opcional).
   * @property {boolean} favorite - Indica se a tarefa é favorita ou não.
   */
  constructor(id, name, description, create_date, completed, date, file, user_id, group_id, favorite, my_day) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.create_date = create_date;
    this.completed = completed;
    this.date = date;
    this.file = file;
    this.user_id = user_id;
    this.group_id = group_id;
    this.favorite = favorite;
    this.my_day = my_day;
  }
}
class TaskFactory {
  /**
   * Cria uma nova instância de {@link Task}.
   * --
   *
   * Essa função gera automaticamente um identificador único (UUID) e define
   * a data de criação no formato brasileiro (dd/mm/yyyy). É ideal para uso em
   * contextos onde tarefas precisam ser instanciadas de forma padronizada,
   * como ao salvar novas tarefas no banco de dados ou ao registrar eventos do usuário.
   *
   * @static
   * @param {string} name - Nome da tarefa. Será automaticamente aparado (`trim`).
   * @param {string} [userId] - Identificador opcional do usuário associado à tarefa.
   * @param {string} [groupId] - Identificador opcional do grupo ao qual a tarefa pertence.
   * @returns {Task} Retorna um objeto representando a tarefa criada.
   *
   * @throws {Error} Caso o parâmetro `name` seja inválido ou vazio.
   *
   * @example
   * // Exemplo de uso
   * const novaTarefa = TaskFactory.create("Estudar TypeScript", "user-123", "grupo-456");
   * console.log(novaTarefa.id); // -> "a12b3c4d..."
   *
   * @since 1.0.0
   */
  static create(name, userId, groupId) {
    const task = new Task(
      v4(),
      name.trim(),
      "",
      DateFormat.DateFormatBrazilian(),
      false,
      null,
      null,
      userId,
      groupId,
      false,
      false
    );
    return {
      id: task.id,
      name: task.name,
      description: task.description,
      create_date: task.create_date,
      completed: task.completed,
      date: task.date,
      file: task.file,
      user_id: task.user_id,
      group_id: task.group_id,
      favorite: task.favorite,
      my_day: task.my_day
    };
  }
}
function linesRenderer() {
  const container = document.querySelector(".lines");
  let count = 0;
  if (window.getComputedStyle(document.querySelector(".drop-down-task")).display === "flex") {
    count = document.querySelector(".drop-down-task").querySelectorAll("ol").length;
  }
  container.innerHTML = "";
  let lines = 9 - (document.querySelector(".main-tasks").querySelectorAll("ol").length + count);
  for (let i = 0; i < lines; i++) {
    container.appendChild(/* @__PURE__ */ h("hr", null));
  }
}
function theme(color) {
  if (color) {
    document.documentElement.style.setProperty("--main-color", color);
  }
}
class MyDayTaskUi extends TaskUi {
  constructor(listViewModel2, detailViewModel) {
    super(listViewModel2, detailViewModel);
  }
  /**
   * renderTask(key)
   * ----------------
   * Renderiza todas as tasks do grupo, separando concluídas e ativas.
   */
  async renderTask(key2, cached = false) {
    UiElements.main_tasks.innerHTML = "";
    UiElements.completed_tasks.innerHTML = "";
    const load = await this.listViewModel.load(cached);
    const tasks = load.filter((task) => task.my_day === true);
    tasks.forEach((task) => {
      this.createTemplateTask(task, task.completed, key2, cached);
    });
    this.notify();
  }
  createTemplateTask(task, completed = false, key2, cached = false) {
    const taskCard = /* @__PURE__ */ h(TaskCard, { task, key: key2 });
    const taskButton = taskCard.querySelector(".task-checkbox");
    if (!completed) UiElements.main_tasks.appendChild(taskCard);
    else UiElements.completed_tasks.appendChild(taskCard);
    const favorite = taskCard.querySelector("#favorite");
    favorite.addEventListener("click", () => {
      this.detailViewModel.favoritedTask(task);
      this.renderTask(key2, cached, true);
    });
    taskButton.addEventListener("click", () => {
      this.detailViewModel.completedTask(task);
      if (task.completed) {
        const audio = new Audio("./completedTaskSound.mp3");
        audio.play();
      }
      this.renderTask(key2, cached);
    });
  }
}
const key = queryParams.getQueryParams("key");
const edit = queryParams.getQueryParams("edit");
const taskRepository = packingDependecyTaskFirestore("task");
const groupRepository = packingDependecyTask("group");
const groupTaskRepository = packingDependecyFirestore("task");
const taskListViewModel = new ListTasksViewModel(taskRepository);
const listViewModel = new ListViewModel(groupTaskRepository);
const taskDetailViewModel = new TaskDetailViewModel(taskRepository, queryParams);
const taskCreateViewModel = new CreateTaskViewModel(TaskFactory, taskRepository);
const groupVM = new GroupViewModel(groupRepository, taskRepository, service);
const group = await groupVM.find(key);
const taskUi = new TaskUi(taskListViewModel, taskDetailViewModel);
const groupUi = new ImportantTaskUi(listViewModel, taskDetailViewModel);
const myDayUi = new MyDayTaskUi(listViewModel, taskDetailViewModel);
function createView(ViewClass, {
  dropDown,
  taskUi: taskUi2,
  components = {},
  ...options
} = {}) {
  return new ViewClass(
    options.group,
    options.edit,
    {
      viewModels: {
        groupVM,
        taskCreateVM: taskCreateViewModel,
        taskListVM: taskListViewModel,
        taskDetailVM: taskDetailViewModel
      },
      uis: {
        taskUI: taskUi2,
        // agora vem por parâmetro
        UiElements,
        FormUi,
        HeaderUi,
        linesRenderer,
        theme
      },
      components: {
        Header: MainHeader,
        ButtonAddTask: AddTask,
        Form: MainForm,
        DropDown: dropDown,
        groupForm: GroupForm,
        ...components
        // permite sobrescrever ou adicionar
      },
      styles: {
        groupForm: styles
      },
      config: configService
    }
  );
}
const taskView = createView(TaskView, {
  dropDown: SettingsDropDown,
  taskUi,
  group,
  edit
});
const importantTaskView = createView(TaskView, {
  dropDown: SettingsDropDown,
  taskUi: groupUi,
  group,
  edit
});
const myDayTaskView = createView(TaskView, {
  dropDown: SettingsDropDown,
  taskUi: myDayUi,
  group,
  edit
});
if (key === "Importante") {
  importantTaskView.render(key);
  console.log("aaaaa");
} else if (key === "Meu Dia") {
  myDayTaskView.render(key);
} else {
  taskView.render(key);
}
//# sourceMappingURL=list-DLZ_EhHx.js.map
