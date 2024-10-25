// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [
    vue(),
    copy({
      targets: [
        { src: 'src/index.d.ts', dest: 'dist/types' },
      ],
      hook: 'writeBundle'
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VBaseComponents',
      formats: ['es', 'umd'],
      fileName: 'v-base-components',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
