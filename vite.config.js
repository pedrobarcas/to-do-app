import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

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

  plugins: [
    VitePWA({
      registerType: "autoUpdate",

      includeAssets: [
        "favicon.ico",
        "robots.txt",
        "icons/icon-192.png",
        "icons/icon-512.png",
      ],

      manifest: {
        name: "To do",
        short_name: "To do",
        start_url: "/to-do-app/",
        display: "standalone",
        background_color: "#080808",
        theme_color: "#080808",
        icons: [
          {
            src: "icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },

      workbox: {
        // ✅ Cacheia todos os arquivos do build (html, css, js, imagens, fontes, etc)
        globPatterns: ["**/*.{html,js,css,png,svg,ico,woff2}"],

        // ⚙️ Remove caches antigos automaticamente
        cleanupOutdatedCaches: true,
        navigateFallback: null,
        clientsClaim: true,
        skipWaiting: true,

        // 🧠 Estratégias de cache (sem interferir em navegação HTML)
        runtimeCaching: [
          {
            // CSS, JS, imagens, fontes
            urlPattern: ({ request }) =>
              ["style", "script", "worker", "image", "font"].includes(
                request.destination
              ),
            handler: "CacheFirst",
            options: {
              cacheName: "assets-cache",
            },
          },
          {
            // Firebase (Firestore, Auth, etc)
            urlPattern: ({ url }) =>
              url.origin.includes("firebase") ||
              url.origin.includes("googleapis.com"),
            handler: "NetworkFirst",
            options: {
              cacheName: "firebase-cache",
              networkTimeoutSeconds: 5,
            },
          },
        ],
      },
    }),
  ],
});
