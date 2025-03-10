import { defineConfig } from "vite";
import dotenv from "dotenv";
import { VitePWA } from "vite-plugin-pwa";
import { createHtmlPlugin } from "vite-plugin-html";
import react from "@vitejs/plugin-react";
import xrsdkPlugin from "@webspatial/react-plugin-vite";

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    xrsdkPlugin(),
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
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          XR_ENV: process.env.XR_ENV,
        },
      },
    }),
  ],
  // 可以在这里使用环境变量
  define: {
    "process.env": process.env,
  },
  server: {
    port: process.env.XR_ENV ? 5201 : 5200,
  },
});
