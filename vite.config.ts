import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(import.meta.dirname, "./src"),
        },
        tsconfigPaths: true
    },
    server: {
        host: '0.0.0.0',
        allowedHosts: true,
    },
    preview: {
        host: '0.0.0.0',
        port: 30010,
        allowedHosts: true
    }
})