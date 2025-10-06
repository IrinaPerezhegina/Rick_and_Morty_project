import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/Rick_and_Morty_project/',
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: 'named',
        ref: true,
        svgo: false,
        titleProp: true
      },
      include: '**/*.svg'
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('src/assets/logo.svg')) {
            return 'logo';
          }
          if (id.includes('src/assets/loader.svg')) {
            return 'loader';
          }
          if (id.includes('src/assets/logo-black.svg')) {
            return 'logo-black';
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
