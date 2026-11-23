import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Vercel serves the app at the domain root; GitHub Pages keeps /devquest/.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const base = process.env.VERCEL ? '/' : env.VITE_BASE || '/devquest/';
  // Local dev can talk to a deployed API: VITE_API_PROXY=https://<deployment>
  const proxyTarget = env.VITE_API_PROXY;

  return {
    base,
    plugins: [react()],
    server: proxyTarget
      ? {
          proxy: {
            '/api': {
              target: proxyTarget,
              changeOrigin: true,
              configure: (proxy) => {
                proxy.on('proxyReq', (req) => req.removeHeader('origin'));
              },
            },
          },
        }
      : undefined,
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            firebase: ['firebase/app', 'firebase/auth', 'firebase/firestore', 'firebase/analytics'],
            icons: ['lucide-react'],
          },
        },
      },
    },
  };
});
