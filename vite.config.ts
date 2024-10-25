import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
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
      entry: 'src/index.ts',
      name: 'VBaseComponents',
      fileName: (format) => `v-base-components.${format}.js`,
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});