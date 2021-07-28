import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["app/(views|frontend)/**/*"],
    exclude: ["app/views/no_css/*"]
  }
})