// Task 1: Fix the workflow
// Lecture: Continuous Integration Basics
//
// A workflow file is YAML, and YAML reads into a plain object, so here our reading
// list's ci.yml is the object workflow below. A teammate wrote it, and it has five
// problems. Fix them: the workflow runs on a push to main and on every pull request
// (not on a push to every branch), its token may only read the code, Node comes from
// the .nvmrc file, and the job installs with the strict npm ci and then runs the
// lint, test and build scripts, in that order, as the lecture's workflow does.
//
// Examples:
//   workflow.on.push              // { branches: ['main'] }
//   workflow.jobs.check.steps[2]  // { run: 'npm ci' }
//
// Run the tests: npm test -- 20-tooling/continuous-integration

export const workflow = {
    name: 'CI',
    on: {
        push: {},
        pull_request: {},
    },
    permissions: {
        contents: 'write',
    },
    jobs: {
        check: {
            'runs-on': 'ubuntu-latest',
            steps: [
                { uses: 'actions/checkout@v7' },
                {
                    uses: 'actions/setup-node@v7',
                    with: { 'node-version': 22, cache: 'npm' },
                },
                { run: 'npm install' },
                { run: 'npm test' },
                { run: 'npm run lint' },
                { run: 'npm run build' },
            ],
        },
    },
};
