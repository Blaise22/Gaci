import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite 
import dns from 'dns'
dns.setDefaultResultOrder('verbatim')

// vite.config.js
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0'
  }
})
