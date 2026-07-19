import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Allow the Codespaces-forwarded preview URL (*.app.github.dev) to reach the dev server.
    allowedHosts: ['.app.github.dev'],
  },
})
