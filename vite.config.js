import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import usePluginImport from "vite-plugin-importer";
import svgr from "vite-plugin-svgr";
import { compression } from "vite-plugin-compression2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression(),
    svgr(),
    usePluginImport({
      libraryName: "antd",
      libraryDirectory: "es",
      style: false,
    }),
    usePluginImport({
      libraryName: "@ant-design/icons",
      libraryDirectory: "es/icons",
      style: false,
      camel2DashComponentName: false,
    }),
  ],
  server: {
    port: 7100,
    hmr: {
      overlay: true,
    },
  },
  resolve: {
    preserveSymlinks: true,
  },
});
