// Task 2: One config, checked at start-up
// Lecture: Configuration with process.env
//
// Write readConfig(env). env is an object like process.env: every value is a string, and a
// name that is not set is not there at all. Return an object with exactly three
// properties, { port, nodeEnv, apiKey }:
//
//   port      from PORT, as a number. When PORT is missing or '', port is 3000.
//             Otherwise PORT must be a whole number from 0 to 65535: '8080' and '0' are
//             fine (0 stays 0), while 'abc', '-1', '3.5' and '70000' are bad.
//   nodeEnv   from NODE_ENV. When NODE_ENV is missing or '', nodeEnv is 'development'.
//             Otherwise it must be 'development', 'production' or 'test'; anything else,
//             such as 'prod', is bad.
//   apiKey    from BOOKS_API_KEY, as it is. It is required: missing or '' is bad.
//
// When one or more settings are bad, throw one Error whose message contains the name of
// every bad setting (PORT, NODE_ENV, BOOKS_API_KEY), so one start-up shows every problem
// at once. The message must not name the settings that are fine.
//
// Read only the env you were given, never process.env, and do not change env.
//
// Examples:
//   readConfig({ BOOKS_API_KEY: 'dev-key' })
//       { port: 3000, nodeEnv: 'development', apiKey: 'dev-key' }
//   readConfig({ PORT: '0', NODE_ENV: 'test', BOOKS_API_KEY: 'dev-key' })
//       { port: 0, nodeEnv: 'test', apiKey: 'dev-key' }
//   readConfig({ PORT: 'abc' })
//       throws an Error whose message contains PORT and BOOKS_API_KEY
//
// Run the tests: npm test -- 24-node-on-the-server/configuration-env

export function readConfig(env) {
    // Your code here
}
