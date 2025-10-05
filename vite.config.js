import { defineConfig } from "vite";

export default defineConfig({
  base: "/to-do-app/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        list: "listTask.html",
        detail: "taskDetail.html",
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
