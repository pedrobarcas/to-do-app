import { O as Observable, o as onAuthStateChanged, a as auth, p as packingDependecyTask, c as configService } from "./index-ChufUB_s.js";
/* empty css               */
/* empty css                */
import "./private-check-e8s1RHyo.js";
import { v as v4, D as DateFormat, L as ListViewModel, s as styles$1 } from "./groupForm.module-qEB7G5qW.js";
import { h } from "./h-DjMzbvrD.js";
class GroupCreateViewModel extends Observable {
  constructor(factory, repository) {
    super();
    this.factory = factory;
    this.repository = repository;
  }
  async create(key, color = "", icon = "fa-solid fa-list-ul") {
    let name = key;
    if (key === "") {
      name = "Lista sem título";
      key = "Lista sem título";
    }
    let i = 1;
    while (await this.repository.find(name)) {
      i++;
      name = `${key} (${i})`;
    }
    onAuthStateChanged(auth, async (user) => {
      const object = this.factory.create(name, color, icon, user.uid);
      const saved = await this.repository.save(object);
      this.notify(saved);
    });
  }
}
class Group {
  /**
   * @property {string|number} id - Identificador único do grupo.
   * @property {string} name - Nome do grupo.
   * @property {Date} create_date - Data de criação do grupo.
   * @property {string} color - Cor do grupo
   * @property {string} icon - Icone expresso em classes Awesome
   * @property {UUID} user_id - Id do usuário
   *
   * @constructor
   */
  constructor(id, name, create_date, color, icon, user_id) {
    this.id = id;
    this.name = name;
    this.create_date = create_date;
    this.color = color;
    this.icon = icon;
    this.user_id = user_id;
  }
}
class GroupFactory {
  /**
   * Cria uma nova instância de Group.
   * --
   * @param {string} name - Nome do grupo.
   * @param {string} color - Cor do grupo.
   * @param {string} icon - Ícone do grupo.
   * @param {string} user_id - Id do usuario
   * @returns {Group} Novo grupo criado.
   */
  static create(name, color = void 0, icon, user_id) {
    const group = new Group(
      v4(),
      name.trim(),
      DateFormat.DateFormatBrazilian(),
      color,
      icon,
      user_id
    );
    return {
      id: group.id,
      name: group.name,
      create_date: group.create_date,
      color: group.color,
      icon: group.icon,
      user_id: group.user_id
    };
  }
}
function GroupCard(props) {
  let icon = "fa-solid fa-list-ul";
  if (props.group.icon && !props.group.icon.includes("fa-regular")) {
    icon = props.group.icon;
  }
  return /* @__PURE__ */ h("a", { className: "content-box box-animated", href: `list.html?key=${props.group.id}` }, /* @__PURE__ */ h(
    "span",
    {
      className: icon,
      "aria-label": "Imagem ilustrativa de uma casa",
      style: `color: ${props.group.color}`
    }
  ), /* @__PURE__ */ h("p", null, props.group.name));
}
class HomeUi {
  constructor(listViewModel) {
    this.listViewModel = listViewModel;
  }
  async renderGroups(root, cached = false) {
    const cacheKey = "groups";
    const localCache = localStorage.getItem(cacheKey);
    if (cached && localCache) {
      root.innerHTML = "";
      const groups2 = JSON.parse(localCache);
      groups2.forEach((group) => this.createTemplateGroup(root, group));
      return;
    }
    const groups = await this.listViewModel.load();
    root.innerHTML = "";
    localStorage.setItem(cacheKey, JSON.stringify(groups));
    groups.forEach((group) => this.createTemplateGroup(root, group));
  }
  createTemplateGroup(root, group) {
    const groupCard = /* @__PURE__ */ h(GroupCard, { group });
    root.appendChild(groupCard);
  }
}
const header = "_header_27h6x_1";
const header_content = "_header_content_27h6x_27";
const header_content_text = "_header_content_text_27h6x_37";
const circle_img = "_circle_img_27h6x_47";
const chevron = "_chevron_27h6x_93";
const styles = {
  header,
  header_content,
  header_content_text,
  circle_img,
  chevron
};
function AccountHeader({ user }) {
  return /* @__PURE__ */ h("header", { className: `box-animated ${styles.header}` }, /* @__PURE__ */ h("a", { href: "./account.html" }, /* @__PURE__ */ h("div", { className: `${styles.header_content}` }, /* @__PURE__ */ h("div", { className: styles.circle_img }, user.email[0].toUpperCase()), /* @__PURE__ */ h("div", { className: styles.header_content_text }, /* @__PURE__ */ h("h1", null, "To do", /* @__PURE__ */ h("span", { className: `fa-solid fa-chevron-down ${styles.chevron}` })), /* @__PURE__ */ h("h2", null, user.email)))));
}
class homeView {
  constructor(Ui, listVM, createVM, styles2, config) {
    this.Ui = Ui;
    this.listVM = listVM;
    this.createVM = createVM;
    this.color;
    this.styles = styles2;
    this.config = config;
  }
  async bindEvents(root = document) {
    this.createVM.subscribe(async (group) => {
      location.replace(`${this.config.get("routers").list}?key=${group.id}&edit=true`);
    });
    root.querySelector(".todo__footer").addEventListener("click", async () => {
      this.createVM.create("", "", "fa-solid fa-list-ul");
    });
  }
  //@Bigtoys-xg12
  async render(root = document) {
    document.querySelector(".main-content");
    const groups = document.querySelector(".groups");
    const header2 = h(AccountHeader, { user: JSON.parse(localStorage.getItem("userCached")) });
    groups.prepend(header2);
    this.bindEvents(root);
    await this.Ui.renderGroups(document.querySelector(".home__group"), true);
    this.Ui.renderGroups(document.querySelector(".home__group"), false);
  }
}
const groupFactory = GroupFactory;
const groupRepository = packingDependecyTask("group");
const homeListViewModel = new ListViewModel(groupRepository);
const homeCreateViewModel = new GroupCreateViewModel(groupFactory, groupRepository);
const homeUi = new HomeUi(homeListViewModel);
const view = new homeView(homeUi, homeListViewModel, homeCreateViewModel, styles$1, configService);
view.render(document);
//# sourceMappingURL=main-By2lDAP3.js.map
