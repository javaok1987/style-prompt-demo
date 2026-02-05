import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/style-prompt-demo/',
  root: '.',
  build: {
    outDir: 'dist',
  }
})
