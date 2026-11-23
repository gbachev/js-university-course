// Task 1: The settings a host must give us
// Lecture: Running the Server in Production
//
// Our readConfig() falls back to ./data/job-tracker.db when DATABASE_PATH is
// missing. On our machine that is what we want. On a host, that folder sits
// inside the app's own files, which the next deploy replaces, so every deploy
// would start with an empty database and nobody would notice until users lose
// their data. Write readProductionConfig(env), where env is an object like
// process.env, that refuses to start in that case.
// - nodeEnv is env.NODE_ENV, or 'development' when it is missing or empty.
// - port is Number(env.PORT || '3000'). It must be a whole number from 0 to 65535,
//   otherwise it is a problem: PORT must be a whole number from 0 to 65535, not "abc"
// - Outside production, databasePath is env.DATABASE_PATH, or './data/job-tracker.db'
//   when it is missing or empty. Any value is fine there.
// - In production, DATABASE_PATH must be set and absolute (isAbsolute() from
//   node:path), since it must point at the folder where the host mounts the disk:
//     missing or empty:  DATABASE_PATH must be set in production
//     not absolute:      DATABASE_PATH must be an absolute path in production, not "./data/job-tracker.db"
//   ':memory:' is not absolute either, which is right: it would lose everything on
//   every restart.
// - Collect every problem first. If there is at least one, throw one Error whose
//   message is 'Cannot start the server:' followed by one line '- <problem>' per
//   problem, in the order above (PORT first). Otherwise return
//   { nodeEnv, port, databasePath }.
//
// Examples:
//   readProductionConfig({})
//       { nodeEnv: 'development', port: 3000, databasePath: './data/job-tracker.db' }
//   readProductionConfig({ NODE_ENV: 'production', PORT: '8080', DATABASE_PATH: '/var/data/job-tracker.db' })
//       { nodeEnv: 'production', port: 8080, databasePath: '/var/data/job-tracker.db' }
//   readProductionConfig({ NODE_ENV: 'production', PORT: 'abc' })
//       throws 'Cannot start the server:\n- PORT must be a whole number from 0 to 65535, not "abc"\n- DATABASE_PATH must be set in production'
//
// Run the tests: npm test -- 25-our-second-project/running-in-production

import { isAbsolute } from 'node:path';

export function readProductionConfig(env) {
    // Your code here
}
