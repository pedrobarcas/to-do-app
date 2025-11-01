const BASE = "/to-do-app/";

export let config = {
  mainGroups: ["Tarefas", "Importante", "Meu Dia"],
  base: "to-do-app/",

  routers: {
    home: `${BASE}index.html`,
    list: `${BASE}list.html`,
    detail: `${BASE}detail.html`,
    account: `${BASE}account.html`,
    configurations: `${BASE}configurations.html`,
    login: `${BASE}login.html`,
    register: `${BASE}register.html`,
  },
};
