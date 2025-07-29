import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path'; // Importación crítica añadida

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'public/index.html') // Ruta absoluta al HTML
      }
    }
  },
  server: {
    port: 3000, // Puerto explícito para desarrollo
    open: true // Abre automáticamente el navegador
  }
});