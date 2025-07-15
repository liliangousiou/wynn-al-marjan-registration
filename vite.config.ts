import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      api: path.resolve(__dirname, 'src/api'),
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      context: path.resolve(__dirname, 'src/context'),
      constants: path.resolve(__dirname, 'src/constants'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      routes: path.resolve(__dirname, 'src/routes'),
      pages: path.resolve(__dirname, 'src/pages'),
      styles: path.resolve(__dirname, 'src/styles'),
      types: path.resolve(__dirname, 'src/types'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
});
