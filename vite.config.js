import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
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
