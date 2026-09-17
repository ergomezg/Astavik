import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    open: '/code.html'
  },
  plugins: [
    {
      name: 'rewrite-root-to-code',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/' || req.url === '/index.html') {
            req.url = '/code.html';
          }
          next();
        });
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: './code.html'
      }
    }
  }
});
