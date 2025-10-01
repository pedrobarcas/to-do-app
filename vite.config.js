import { defineConfig } from "vite";

export default defineConfig({
  base: "/to-do-app/",
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },

  server: {
    host: true,
  },
});
