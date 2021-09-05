# Rails Vite WindiCSS

simple integration with WindiCSS

## Step

add windiCSS config file to `configFiles` in `vite.config.js` or `vite.config.ts`

example

```javascript
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
you can write WindiCSS config in the places where you add it on `configFiles`
