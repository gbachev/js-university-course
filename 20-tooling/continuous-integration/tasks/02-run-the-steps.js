// Task 2: Which steps run?
// Lecture: Continuous Integration Basics
//
// The steps of a job run in order. A command that exits with a non-zero code fails its
// step, and the steps after it are skipped. Write runJob(commands, exitCodes).
// commands is the list of run commands, like ['npm ci', 'npm run lint']. exitCodes
// maps a command to the exit code it gives; a command missing from it exits with 0.
// Return { passed, ran, failed, skipped }: passed is true when every step exited with
// 0, ran lists the commands that ran (the failing one included), failed is the
// command that failed or null, and skipped lists the commands that never ran.
//
// Examples:
//   runJob(['npm ci', 'npm run lint', 'npm test'], { 'npm run lint': 1 })
//   // { passed: false, ran: ['npm ci', 'npm run lint'], failed: 'npm run lint',
//   //   skipped: ['npm test'] }
//
// Run the tests: npm test -- 20-tooling/continuous-integration

export function runJob(commands, exitCodes) {
    // Your code here
}
