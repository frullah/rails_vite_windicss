import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    exclude: ["app/views/no_css/*"]
  }
})