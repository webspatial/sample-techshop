import { defineConfig } from "vite";
import baseConfig from "./vite.config";
import merge from "lodash/merge";
import path from "path";
import tsconfig from "./tsconfig.app.json";

const XRSDKBaseDir = "/Users/bytedance/github/XRSDK/";

// update tsconfig jsxImportSource
tsconfig.compilerOptions.jsxImportSource = "@webspatial/react-sdk/jsx";

const configForDevSourceCode = {
  resolve: {
    alias: {
      "@webspatial/react-sdk": path.join(XRSDKBaseDir, "react/src"),
      "@webspatial/core-sdk": path.join(XRSDKBaseDir, "runtime/src"),
    },
  },
  define: {
    __WEB__: "false",
  },
  esbuild: {
    tsconfigRaw: tsconfig,
  },
};

// remove 'react-vite-plugin-for-webspatial' plugin
function removeReactVitePluginForWebspatialPlugin() {
  const index = baseConfig.plugins?.findIndex(
    (plugin) => (plugin as any).name === "react-vite-plugin-for-webspatial"
  );
  if (index !== undefined && index !== -1) {
    baseConfig.plugins?.splice(index, 1);
  }
}
removeReactVitePluginForWebspatialPlugin();

const mergedConfig = defineConfig(
  merge({}, baseConfig, configForDevSourceCode)
);

export default mergedConfig;
