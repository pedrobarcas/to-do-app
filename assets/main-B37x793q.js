import { O as Observable, o as onAuthStateChanged, a as auth, p as packingDependecyTask, c as configService } from "./index-BPGqw3BG.js";
/* empty css               */
/* empty css                */
import "./private-check-BevK0UrK.js";
import { v as v4, D as DateFormat, L as ListViewModel, s as styles$1 } from "./groupForm.module-6qdc95IP.js";
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
  return /* @__PURE__ */ h("a", { className: "content-box", href: `list.html?key=${props.group.id}` }, /* @__PURE__ */ h(
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
const header = "_header_ts405_1";
const header_content = "_header_content_ts405_23";
const header_content_text = "_header_content_text_ts405_33";
const circle_img = "_circle_img_ts405_43";
const styles = {
  header,
  header_content,
  header_content_text,
  circle_img
};
function AccountHeader({ user }) {
  return /* @__PURE__ */ h("header", { className: styles.header }, /* @__PURE__ */ h("a", { href: "./account.html" }, /* @__PURE__ */ h("div", { className: styles.header_content }, /* @__PURE__ */ h("div", { className: styles.circle_img }, user.email[0].toUpperCase()), /* @__PURE__ */ h("div", { className: styles.header_content_text }, /* @__PURE__ */ h("h1", null, "To do", /* @__PURE__ */ h("span", { className: "fa-solid fa-chevron-down" })), /* @__PURE__ */ h("h2", null, user.email)))));
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
    const main_content = document.querySelector(".main-content");
    const header2 = h(AccountHeader, { user: JSON.parse(localStorage.getItem("userCached")) });
    main_content.prepend(header2);
    this.bindEvents(root);
    await this.Ui.renderGroups(document.querySelector(".home__group"), true);
    this.Ui.renderGroups(document.querySelector(".home__group"), false);
  }
}
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/to-do-app/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    let allSettled = function(promises$2) {
      return Promise.all(promises$2.map((p) => Promise.resolve(p).then((value$1) => ({
        status: "fulfilled",
        value: value$1
      }), (reason) => ({
        status: "rejected",
        reason
      }))));
    };
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = allSettled(deps.map((dep) => {
      dep = assetsURL(dep);
      if (dep in seen) return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) link.as = "script";
      link.crossOrigin = "";
      link.href = dep;
      if (cspNonce) link.setAttribute("nonce", cspNonce);
      document.head.appendChild(link);
      if (isCss) return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
      });
    }));
  }
  function handlePreloadError(err$2) {
    const e$1 = new Event("vite:preloadError", { cancelable: true });
    e$1.payload = err$2;
    window.dispatchEvent(e$1);
    if (!e$1.defaultPrevented) throw err$2;
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
function registerSW(options = {}) {
  const {
    immediate = false,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisteredSW,
    onRegisterError
  } = options;
  let wb;
  let registerPromise;
  const updateServiceWorker = async (_reloadPage = true) => {
    await registerPromise;
  };
  async function register() {
    if ("serviceWorker" in navigator) {
      wb = await __vitePreload(async () => {
        const { Workbox } = await import("./workbox-window.prod.es5-DyWhvi0J.js");
        return { Workbox };
      }, true ? [] : void 0).then(({ Workbox }) => {
        return new Workbox("/to-do-app/sw.js", { scope: "/to-do-app/", type: "classic" });
      }).catch((e) => {
        onRegisterError?.(e);
        return void 0;
      });
      if (!wb)
        return;
      {
        {
          wb.addEventListener("activated", (event) => {
            if (event.isUpdate || event.isExternal)
              window.location.reload();
          });
          wb.addEventListener("installed", (event) => {
            if (!event.isUpdate) {
              onOfflineReady?.();
            }
          });
        }
      }
      wb.register({ immediate }).then((r) => {
        if (onRegisteredSW)
          onRegisteredSW("/to-do-app/sw.js", r);
        else
          onRegistered?.(r);
      }).catch((e) => {
        onRegisterError?.(e);
      });
    }
  }
  registerPromise = register();
  return updateServiceWorker;
}
const updateSW = registerSW({
  onNeedRefresh() {
    const shouldRefresh = confirm(
      "Nova versão disponível! Deseja atualizar agora?"
    );
    if (shouldRefresh) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log("Aplicativo pronto para uso offline 🚀");
  }
});
const groupFactory = GroupFactory;
const groupRepository = packingDependecyTask("group");
const homeListViewModel = new ListViewModel(groupRepository);
const homeCreateViewModel = new GroupCreateViewModel(groupFactory, groupRepository);
const homeUi = new HomeUi(homeListViewModel);
const view = new homeView(homeUi, homeListViewModel, homeCreateViewModel, styles$1, configService);
view.render(document);
//# sourceMappingURL=main-B37x793q.js.map
