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
            name: 'MultiList',
            formats: ['es', 'umd'],
            fileName: (format) => `multi-list.${format}.js`,
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
            '@mult/base-ui': `${cwd}/packages/multi-base-ui/src`,
            '@mult/ui': `${cwd}/packages/multi-ui/src`,
        },
    },
});
