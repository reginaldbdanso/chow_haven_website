import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // server: {
  //   port: 3000,
  //   host: true,
  //   hmr: {
  //     host: 'orange-pancake-pvqx9x6vgwg2r56j-3000.app.github.dev',
  //     protocol: 'ws',
  //     // host: 'localhost',
  //   },
  // },
});
