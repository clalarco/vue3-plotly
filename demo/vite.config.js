import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/vue3-plotly/demo/',
  build: {
    outDir: '../dist/gh-pages/demo',
    chunkSizeWarningLimit: 1200,
  }
})
