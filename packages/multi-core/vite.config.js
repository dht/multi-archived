import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import analyze from 'rollup-plugin-analyzer';
import p from './package.json';
import { externals } from 'shared-base';

const cwd = path.resolve(process.cwd(), '../../');

const ANALYZE_BUNDLE = false;

export default defineConfig({
    plugins: [dts({}), react()],
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.tsx'),
            name: 'MultiCore',
            formats: ['es', 'umd'],
            fileName: (format) => `multi-core.${format}.js`,
        },
        rollupOptions: {
            plugins: [ANALYZE_BUNDLE ? analyze() : null],
            ...externals({
                react: '',
                'react/jsx-runtime': '',
                ...p.dependencies,
            }),
        },
    },
    resolve: {
        alias: {
            '@mult/board': `${cwd}/packages/multi-board/src`,
            '@mult/calendar': `${cwd}/packages/multi-calendar/src`,
            '@mult/gallery': `${cwd}/packages/multi-gallery/src`,
            '@mult/list': `${cwd}/packages/multi-list/src`,
            '@mult/table': `${cwd}/packages/multi-table/src`,
            '@mult/sheet': `${cwd}/packages/multi-sheet/src`,
            '@mult/timeline': `${cwd}/packages/multi-timeline/src`,
            '@mult/core': `${cwd}/packages/multi-core/src`,
        },
    },
});
