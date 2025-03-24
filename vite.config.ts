import { defineConfig } from "vite";
import dotenv from "dotenv";
import { createHtmlPlugin } from "vite-plugin-html";
import react from "@vitejs/plugin-react";
import WebSpatial from "@webspatial/react-plugin-vite";

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    WebSpatial(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          XR_ENV: process.env.XR_ENV,
        },
      },
    }),
  ],
  define: {
    "process.env": process.env,
  },
});
