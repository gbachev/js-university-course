// Runs the task tests with Node's built-in test runner, so there is nothing to install.
//
//   npm test                                   every task in the course
//   npm test -- 04-operators                   every task of one section
//   npm test -- 04-operators/comparison        the tasks of one lecture
//   npm test -- 04-operators/comparison/tasks/01-strict-or-loose.test.js
//
// npm run test:solutions runs the same tests against the solutions folders.
import { spawnSync } from 'node:child_process';

const args = process.argv.slice(2);
const solutions = args.includes('--solutions');
const targets = args.filter((arg) => arg !== '--solutions');

const patterns = (targets.length ? targets : ['.']).map((target) => {
    const path = target.replaceAll('\\', '/').replace(/\/+$/, '');
    return path.endsWith('.js') ? path : `${path}/**/tasks/*.test.js`;
});

const result = spawnSync(process.execPath, ['--test', ...patterns], {
    stdio: 'inherit',
    env: solutions ? { ...process.env, SOLUTIONS: '1' } : process.env,
});

process.exit(result.status ?? 1);
