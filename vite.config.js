import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for a React + Tailwind project
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});