import { defineConfig } from "vite";

export default defineConfig({
  base: "/to-do-app/",

  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        list: "list.html",
        detail: "detail.html",
        configurations: "configurations.html",
        agradecimentos: "AGRADECIMENTOS.html",
        notice: "NOTICE.html",
        login: "login.html",
        register: "register.html",
        account: "account.html",
      },
    },
  },

  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },

  server: {
    host: true,
  },
});
