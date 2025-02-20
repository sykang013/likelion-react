import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      //resolve는 경로 병합
      '@' : resolve(__dirname, './src'),
    }
  },
  server: {
    host: 'localhost',
    port: 3000,
  }
});