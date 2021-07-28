import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import RubyPlugin from 'vite-plugin-ruby'
import FullReload from 'vite-plugin-full-reload'
import path from 'path'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    WindiCSS({
      root: __dirname,
      // to tell the config files to be loaded
      // without it, the config file cannot be loaded
      configFiles: [path.resolve("windi.config.ts")]
    }),
    FullReload(['config/routes.rb', 'app/views/**/*'], { delay: 800, always: false })
  ],
})
