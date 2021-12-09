# Rails Vite WindiCSS

simple integration with WindiCSS

## Step

add windiCSS config file path to `configFiles` in `vite.config.js` or `vite.config.ts`

example

```javascript
import path from 'path'

export default defineConfig({
  // ...
  plugins: [
    // ...
    WindiCSS({
      root: __dirname,
      configFiles: [path.resolve("windi.config.ts")] // <== HERE! <==
    }),
    // ...
  ],
  // ...
})
```
and then you can write WindiCSS config in the places where you add it on `configFiles`
