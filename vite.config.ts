import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import ext from "@yelo/rollup-node-external";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  resolve: {
    dedupe: ['preact', 'preact/hooks']
  },
  build: {
    assetsDir: 'assetsDir',
    minify: false,
    terserOptions: {
      ecma: 5,
      compress: {
        drop_console: true,
        keep_classnames: true,
        keep_fargs: true,
        keep_fnames: true,
        reduce_funcs: false,
        reduce_vars: false,
      },
      mangle: {
        keep_classnames: true,
        keep_fnames: true
      }
    },
    rollupOptions: {
      external: ext(),
      plugins: [

      ]
    }
  },
})
