import { O as Observable, p as packingDependecyTask, q as queryParams, s as service, c as configService } from "./index-CEjhPFPf.js";
/* empty css               */
import "./private-check-CHlmduoZ.js";
import { a as TaskDetailViewModel, T as TaskCard } from "./taskDetailViewModel-CskNvAVh.js";
import { h } from "./h-DjMzbvrD.js";
import { H as Header } from "./header-D6v_BbzM.js";
class EditViewModel extends Observable {
  constructor(repository, service2) {
    super();
    this.repository = repository;
    this.service = service2;
  }
  async edit(object, updates = {}) {
    const updatedTask = this.service.edit(object, updates);
    const obj = await this.repository.edit(updatedTask);
    this.notify(updatedTask);
    return obj;
  }
}
class RemoveViewModel extends Observable {
  constructor(repository) {
    super();
    this.repository = repository;
  }
  async remove(object) {
    const removed = await this.repository.remove(object);
    this.notify();
    return removed;
  }
  async removeGroup(key) {
    const removed = await this.repository.clear(key);
    this.notify();
    return removed;
  }
}
function Footer(content) {
  return /* @__PURE__ */ h("footer", { className: "main-footer" }, /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h("div", { className: "footer-content" }, /* @__PURE__ */ h("time", { className: "task-date", title: content.content }, content.content), /* @__PURE__ */ h("div", { className: "task-actions" }, /* @__PURE__ */ h("span", { className: "fa-solid fa-trash" }))));
}
function Form(props) {
  return /* @__PURE__ */ h("section", { className: "main-infos-task", id: "main-infos-task" }, /* @__PURE__ */ h("div", { className: "form-input-box" }, /* @__PURE__ */ h("span", { className: "fa-regular fa-sun" }), /* @__PURE__ */ h("button", { className: "remember-me-button form-input" }, "Lembrar-me")), /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h("div", { className: "form-input-box" }, /* @__PURE__ */ h("label", { htmlFor: "date", className: "fa-regular fa-calendar" }), /* @__PURE__ */ h(
    "input",
    {
      type: "date",
      className: "form-input",
      name: "date",
      title: "Adicionar uma data",
      id: "date",
      value: props.task.date
    }
  )), /* @__PURE__ */ h("hr", null)), /* @__PURE__ */ h("div", { className: "form-input-box" }, /* @__PURE__ */ h("label", { htmlFor: "archive", className: "fa-solid fa-paperclip" }), /* @__PURE__ */ h("label", { htmlFor: "archive" }, " Adicionar um arquivo"), /* @__PURE__ */ h(
    "input",
    {
      type: "file",
      className: "form-input",
      name: "archive",
      id: "archive"
    }
  )), /* @__PURE__ */ h(
    "textarea",
    {
      name: "anotations",
      id: "anotations",
      placeholder: "Adicionar anotações",
      value: props.task.description
    }
  ));
}
function taskDetail(task, components = {}, href) {
  return /* @__PURE__ */ h("main", { className: "main-content" }, /* @__PURE__ */ h(components.Header, { title: "Tarefas", href }), /* @__PURE__ */ h("div", { className: "main-task tasks" }, /* @__PURE__ */ h(components.TaskCard, { task, forEdition: true })), /* @__PURE__ */ h(components.Form, { task }), /* @__PURE__ */ h(components.Footer, { content: task.create_date }));
}
class TaskDetailView {
  constructor(viewModels, components, config) {
    this.taskDetailVM = viewModels.detail;
    this.taskEditVM = viewModels.edit;
    this.taskRemoveVM = viewModels.remove;
    this.taskDetailComponent = components;
    this.config = config;
  }
  async render(root) {
    await this.taskDetailVM.get("task_id").then((task) => {
      console.log(task);
      root.appendChild(this.taskDetailComponent);
      const name = document.getElementById("name");
      const anotations = document.getElementById("anotations");
      const date = document.getElementById("date");
      const button_completed_task = document.querySelector(".task-checkbox");
      window.addEventListener("input", async () => {
        await this.taskEditVM.edit(task, {
          name: name.value,
          description: anotations.value,
          date: date.value
        });
      });
      this.taskRemoveVM.subscribe(() => {
        history.back();
      });
      document.querySelector(".fa-trash").addEventListener("click", async () => {
        await this.taskRemoveVM.remove(task);
      });
      this.taskDetailVM.subscribe(() => {
        location.reload();
      });
      button_completed_task.addEventListener("click", async () => {
        await this.taskDetailVM.completedTask(task);
      });
    });
  }
}
const taskRepository = packingDependecyTask("task");
const taskDetailViewModel = new TaskDetailViewModel(taskRepository, queryParams);
const taskEditViewModel = new EditViewModel(taskRepository, service);
const taskRemoveViewModel = new RemoveViewModel(taskRepository);
const view = new TaskDetailView(
  {
    "detail": taskDetailViewModel,
    "edit": taskEditViewModel,
    "remove": taskRemoveViewModel
  },
  taskDetail(await taskDetailViewModel.get("task_id"), {
    "TaskCard": TaskCard,
    "Header": Header,
    "Footer": Footer,
    "Form": Form
  }, configService.get("routers").home),
  configService
);
const container = document.querySelector(".container");
view.render(container);
//# sourceMappingURL=detail-vvZ-mbt3.js.map
