import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import xrsdkPlugin from "@webspatial/react-sdk/plugin-vite.js";
import dotenv from "dotenv";
import { createHtmlPlugin } from "vite-plugin-html";

// 加载 .env 文件
dotenv.config();

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
    xrsdkPlugin(),
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
});
