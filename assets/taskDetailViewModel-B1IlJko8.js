import { h } from "./h-DjMzbvrD.js";
import { O as Observable } from "./index-ChufUB_s.js";
const task = "_task_fb9rw_1";
const task_display = "_task_display_fb9rw_39";
const task_name = "_task_name_fb9rw_67";
const styles = {
  task,
  task_display,
  task_name
};
function TaskCard({ task: task2, forEdition = false, key }) {
  let button = /* @__PURE__ */ h("button", { className: "task-checkbox" });
  let name = /* @__PURE__ */ h("a", { className: styles.task_name, href: `./detail.html?task_id=${task2.id}&key=${key}` }, task2.name);
  let favorite = /* @__PURE__ */ h("span", { className: "fa-regular fa-star" });
  if (forEdition) {
    name = /* @__PURE__ */ h("input", { type: "text", className: "form-input", name: "name", id: "name", value: task2.name });
  }
  if (task2.completed) {
    name.style.textDecoration = "line-through";
    button.style.backgroundColor = "var(--main-color)";
    button.innerHTML = `<span class="fa-solid fa-check"></span>`;
    button.style.border = "none";
  }
  if (task2.favorite) {
    favorite.classList = "fa-solid fa-star";
    favorite.style.color = "var(--main-color)";
  }
  const taskCard = /* @__PURE__ */ h("ol", { className: `${styles.task} task${task2.id} box-animated` }, /* @__PURE__ */ h("div", { className: styles.task_display }, button, name), /* @__PURE__ */ h("div", { className: `${styles.favorite} favorite` }, favorite));
  return taskCard;
}
class DetailViewModel extends Observable {
  constructor(repository, queryParam) {
    super();
    this.repository = repository;
    this.queryParam = queryParam;
  }
  async get(param) {
    const task_id = this.queryParam.getQueryParams(param);
    let object = JSON.parse(localStorage.getItem(task_id));
    console.log(object);
    if (!object) {
      object = await this.repository.find(
        this.queryParam.getQueryParams(param)
      );
      console.log(object);
      localStorage.setItem(task_id, JSON.stringify(object));
    }
    const resolution = object;
    return resolution;
  }
}
class TaskDetailViewModel extends DetailViewModel {
  constructor(repository, queryParam) {
    super(repository, queryParam);
  }
  async completedTask(task2) {
    const completed = await this.repository.completed(task2);
    this.notify();
    return completed;
  }
  async favoritedTask(task2) {
    const favorited = await this.repository.favorited(task2);
    this.notify();
    return favorited;
  }
  async addMyDay(task2) {
    const myDay = await this.repository.addMyDay(task2);
    this.notify();
    return myDay;
  }
}
export {
  TaskCard as T,
  TaskDetailViewModel as a
};
//# sourceMappingURL=taskDetailViewModel-B1IlJko8.js.map
