import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@widgets': '/src/widgets',
            '@shared': '/src/shared',
            '@pages': '/src/pages',
            '@features': '/src/features',
        },
    },
})
