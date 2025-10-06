import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/Rick_and_Morty/',
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
    }),
    viteImagemin({
      optipng: { optimizationLevel: 7 },
      pngquant: { quality: [0.8, 0.9], speed: 4 },
      svgo: {
        plugins: [{ name: 'removeViewBox' }, { name: 'removeEmptyAttrs' }]
      }
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
