import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import path from 'path'

export default defineConfig({
  plugins: [
    checker({
      typescript: true,
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
