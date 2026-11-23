import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        // Vite passes every /api request on to the Express server. The browser
        // only ever talks to Vite, so it sees one origin: no CORS, and the session
        // cookie works as it will in production.
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                // Keep the Host header the browser sent (localhost:5173). The
                // server compares it with the Origin header and refuses a POST
                // when they differ. The short form '/api': 'http://localhost:3000'
                // turns changeOrigin on, which rewrites Host to localhost:3000.
                changeOrigin: false,
            },
        },
    },
});
