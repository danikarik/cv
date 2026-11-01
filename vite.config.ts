import vue from "@vitejs/plugin-vue"
import { defineConfig, lazyPlugins } from "vite-plus"

// https://vite.dev/config/
export default defineConfig({
  fmt: {
    semi: false,
    singleQuote: false,
    sortPackageJson: true,
    sortImports: true,
    trailingComma: "none"
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true }
  },
  plugins: lazyPlugins(() => [vue()])
})
