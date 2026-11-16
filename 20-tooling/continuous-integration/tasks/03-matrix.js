// Task 3: The checks of a matrix
// Lecture: Continuous Integration Basics
//
// A matrix runs a job once per value, and a pull request shows one check per run:
// check (24) and check (26) for node-version: [24, 26]. With two keys, GitHub runs
// every combination, like check (24, ubuntu-latest). Write checkNames(jobName,
// matrix): matrix maps each key to its list of values, and we return the names of
// the checks. Combine the keys in the order of the object: all values of the second
// key for the first value of the first key, and so on. Values are joined with ', '.
// A job without a matrix (an empty object) has one check, named like the job.
//
// Examples:
//   checkNames('check', { 'node-version': [24, 26] })
//   // ['check (24)', 'check (26)']
//   checkNames('check', {
//       'node-version': [24, 26],
//       os: ['ubuntu-latest', 'windows-latest'],
//   })
//   // ['check (24, ubuntu-latest)', 'check (24, windows-latest)',
//   //  'check (26, ubuntu-latest)', 'check (26, windows-latest)']
//
// Run the tests: npm test -- 20-tooling/continuous-integration

export function checkNames(jobName, matrix) {
    // Your code here
}
