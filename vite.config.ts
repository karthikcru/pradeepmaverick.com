import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pradeepmaverick.com/', // GitHub Pages project path
  build: {
    outDir: 'dist',
  },
})
