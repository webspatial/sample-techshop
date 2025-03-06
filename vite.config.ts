import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      includeAssets: [
        "favicon.ico",
        "robots.txt",
        "icons/*.png",
        "icons/*.svg",
      ],
      manifest: false, // 使用 public/manifest.json
      injectRegister: null, // 不自动注册 service worker
      disable: true, // 禁用 service worker 生成
    }),
  ],
});
