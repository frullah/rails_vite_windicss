import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import RubyPlugin from 'vite-plugin-ruby'
import FullReload from 'vite-plugin-full-reload'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    WindiCSS({
      root: __dirname,
      // scan: {
      //   fileExtensions: ['erb', 'js'],
      //   dirs: ['app/views', 'app/frontend'], // or app/javascript, or app/packs
      // },
      preflight: false,
      config: {
        extract: {
          include: ["app/(views|frontend)/**/*"],
          exclude: ["app/views/no_css/*"]
        }
      }
    }),
    FullReload(['config/routes.rb', 'app/views/**/*'], { delay: 800, always: false })
  ],
})
