export const packageJson = {
    name: 'reading-list',
    version: '1.0.0',
    private: true,
    type: 'module',
    scripts: {
        dev: 'vite',
        build: 'vite build',
        test: 'vitest run',
        check: 'npm test && npm run build',
    },
    dependencies: {
        nanoid: '^6.0.2',
    },
    devDependencies: {
        vite: '^8.3.8',
        vitest: '^5.1.0',
    },
};
