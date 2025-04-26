import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // allows access via LAN IP
    port: 5225,      // optional, default is 5173
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
