import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';
import * as path from 'path';

const cwd = path.resolve(process.cwd(), '../../');

// https://vitejs.dev/config/

export default defineConfig({
    base: '/',
    build: {
        sourcemap: true,
        outDir: 'dist/site',
    },
    plugins: [
        tsconfigPaths({
            loose: true,
        }),
        react(),
        visualizer(),
    ],
    resolve: {
        alias: {
            '@mult/board': `${cwd}/views/multi-board/src`,
            '@mult/calendar': `${cwd}/views/multi-calendar/src`,
            '@mult/gallery': `${cwd}/views/multi-gallery/src`,
            '@mult/list': `${cwd}/views/multi-list/src`,
            '@mult/table': `${cwd}/views/multi-table/src`,
            '@mult/sheet': `${cwd}/views/multi-sheet/src`,
            '@mult/timeline': `${cwd}/views/multi-timeline/src`,
            '@mult/core': `${cwd}/packages/multi-core/src`,
            '@mult/ui': `${cwd}/packages/multi-ui/src`,
            '@mult/base-ui': `${cwd}/packages/multi-base-ui/src`,
        },
    },
    define: {},
    server: {
        host: true,
        port: 3001,
    },
});
