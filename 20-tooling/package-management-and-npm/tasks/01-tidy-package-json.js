// Task 1: Tidy up package.json
// Lecture: Package Management and npm
//
// A teammate set up our reading list in a hurry. The object packageJson below is the
// project's package.json. Fix it: nanoid is the only package our code needs when it
// runs, Vite and Vitest only build and test it. The project must never be published
// to npm, and Node must read its .js files as ES modules. Keep every version as it is,
// and add a "check" script that runs the tests and then the build.
//
// Examples:
//   packageJson.dependencies       // { nanoid: '^6.0.2' }
//   packageJson.scripts.check      // 'npm test && npm run build'
//
// Run the tests: npm test -- 20-tooling/package-management-and-npm

export const packageJson = {
    name: 'reading-list',
    version: '1.0.0',
    type: 'commonjs',
    scripts: {
        dev: 'vite',
        build: 'vite build',
        test: 'vitest run',
    },
    dependencies: {
        vite: '^8.3.8',
        vitest: '^5.1.0',
    },
    devDependencies: {
        nanoid: '^6.0.2',
    },
};
