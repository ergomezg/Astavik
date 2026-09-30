import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    open: '/code.html'
  },
  plugins: [
    {
      name: 'html-fallback',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/' || req.url === '') {
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
