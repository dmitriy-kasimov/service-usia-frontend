import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr({
            svgrOptions: { exportType: 'default' },
        }),
    ],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    base: './',
    build: {
        outDir: 'A:/Alone/PROJECTS/GTA5/LAtruckers/server/resources/ServiceUSIA/frontend',
        emptyOutDir: true,
        minify: 'esbuild',
        reportCompressedSize: false,
    },
});
