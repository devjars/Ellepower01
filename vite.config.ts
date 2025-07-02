import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Create separate chunks for vendor libraries
          react: ['react', 'react-dom', 'react-router-dom'],
          lottie: ['lottie-web'],
          // you can add more here if needed
        },
      },
    },
  },
})
