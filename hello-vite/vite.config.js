import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/hello-vite/'   // 👈 VERY IMPORTANT (repo name)
})