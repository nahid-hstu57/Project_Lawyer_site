import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Project_Lawyer_site/',
  plugins: [react(),tailwindcss()],
})
