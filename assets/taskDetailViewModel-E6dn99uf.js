import { h } from "./h-DjMzbvrD.js";
import { O as Observable } from "./index-CszmcCWL.js";
function TaskCard({ task, forEdition = false, key }) {
  let button = /* @__PURE__ */ h("button", { className: "task-checkbox" });
  let name = /* @__PURE__ */ h("a", { className: "task-name", href: `./detail.html?task_id=${task.id}&key=${key}` }, task.name);
  if (forEdition) {
    name = /* @__PURE__ */ h("input", { type: "text", className: "form-input", name: "name", id: "name", value: task.name });
  }
  if (task.completed) {
    name.style.textDecoration = "line-through";
    button.style.backgroundColor = "var(--main-color)";
    button.innerHTML = `<span class="fa-solid fa-check"></span>`;
    button.style.border = "none";
  }
  return /* @__PURE__ */ h("ol", { className: `tasks task${task.id} task-card` }, /* @__PURE__ */ h("div", null, button), name);
}
class DetailViewModel extends Observable {
  constructor(repository, queryParam) {
    super();
    this.repository = repository;
    this.queryParam = queryParam;
  }
  async get(param) {
    const resolution = await this.repository.find(
      this.queryParam.getQueryParams(param)
    );
    console.log(this.queryParam.getQueryParams(param));
    return resolution;
  }
}
class TaskDetailViewModel extends DetailViewModel {
  constructor(repository, queryParam) {
    super(repository, queryParam);
  }
  async completedTask(task) {
    const completed = await this.repository.completed(task);
    this.notify();
    return completed;
  }
}
export {
  TaskCard as T,
  TaskDetailViewModel as a
};
//# sourceMappingURL=taskDetailViewModel-E6dn99uf.js.map
