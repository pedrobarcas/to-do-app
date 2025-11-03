import { h } from "./h-DjMzbvrD.js";
class DateFormat {
  static DateFormatBrazilian() {
    const now = /* @__PURE__ */ new Date();
    const formator = new Intl.DateTimeFormat("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
    return formator.format(now);
  }
}
const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    if (typeof crypto === "undefined" || !crypto.getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    getRandomValues = crypto.getRandomValues.bind(crypto);
  }
  return getRandomValues(rnds8);
}
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const native = { randomUUID };
function v4(options, buf, offset) {
  if (native.randomUUID && true && !options) {
    return native.randomUUID();
  }
  options = options || {};
  const rnds = options.random ?? options.rng?.() ?? rng();
  if (rnds.length < 16) {
    throw new Error("Random bytes length must be >= 16");
  }
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  return unsafeStringify(rnds);
}
const container = "_container_pchua_1";
const button = "_button_pchua_23";
const group = "_group_pchua_35";
const personalizationContent = "_personalizationContent_pchua_49";
const personalization = "_personalization_pchua_49";
const content = "_content_pchua_77";
const title = "_title_pchua_103";
const input = "_input_pchua_113";
const selectColor = "_selectColor_pchua_125";
const colorContent = "_colorContent_pchua_135";
const actions = "_actions_pchua_149";
const listIcons$1 = "_listIcons_pchua_163";
const styles = {
  container,
  button,
  group,
  personalizationContent,
  personalization,
  content,
  title,
  input,
  selectColor,
  colorContent,
  actions,
  listIcons: listIcons$1
};
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
  const title2 = isEdit ? "Renomear lista" : "Nova lista";
  const message = isEdit ? "SALVAR" : "CRIAR LISTA";
  return /* @__PURE__ */ h("form", { className: styles.container }, /* @__PURE__ */ h("div", { className: styles.content }, /* @__PURE__ */ h("p", { className: styles.title }, title2), /* @__PURE__ */ h("div", { className: styles.input }, /* @__PURE__ */ h("label", { htmlFor: "group", role: "button", tabIndex: "0", onClick: showListIcon }, /* @__PURE__ */ h(
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
  const personalization2 = document.querySelector(`.${styles.personalizationContent}`);
  const list = document.querySelector(`.${styles.listIcons}`);
  if (personalization2.style.display === "flex") {
    personalization2.style.display = "none";
    list.style.display = "flex";
  } else {
    personalization2.style.display = "flex";
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
export {
  DateFormat as D,
  GroupForm as G,
  styles as s,
  v4 as v
};
//# sourceMappingURL=groupForm-DMEoLfJa.js.map
