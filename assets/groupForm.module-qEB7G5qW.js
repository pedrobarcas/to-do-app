import { O as Observable } from "./index-ChufUB_s.js";
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
class ListViewModel extends Observable {
  constructor(repository) {
    super();
    this.repository = repository;
  }
  async load(cached = false) {
    const objects = await this.repository.load(cached);
    console.log(objects);
    this.notify();
    return objects;
  }
}
const container = "_container_xw1ie_1";
const button = "_button_xw1ie_25";
const group = "_group_xw1ie_37";
const personalizationContent = "_personalizationContent_xw1ie_51";
const personalization = "_personalization_xw1ie_51";
const content = "_content_xw1ie_79";
const title = "_title_xw1ie_105";
const input = "_input_xw1ie_115";
const selectColor = "_selectColor_xw1ie_127";
const colorContent = "_colorContent_xw1ie_137";
const actions = "_actions_xw1ie_151";
const listIcons = "_listIcons_xw1ie_165";
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
  listIcons
};
export {
  DateFormat as D,
  ListViewModel as L,
  styles as s,
  v4 as v
};
//# sourceMappingURL=groupForm.module-qEB7G5qW.js.map
