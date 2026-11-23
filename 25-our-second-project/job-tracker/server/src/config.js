// Reads and checks every setting once, at start-up, and throws one error that lists every
// problem. It takes an object like process.env, so the tests can pass a plain object.
const NODE_ENVS = ['development', 'test', 'production'];

export function readConfig(env) {
    const problems = [];

    const port = Number(env.PORT || '3000');
    if (!Number.isInteger(port) || port < 0 || port > 65535) {
        problems.push(
            `PORT must be a whole number from 0 to 65535, not "${env.PORT}"`,
        );
    }

    // A typo such as "prod" would quietly turn off the production settings.
    const nodeEnv = env.NODE_ENV || 'development';
    if (!NODE_ENVS.includes(nodeEnv)) {
        problems.push(
            `NODE_ENV must be one of ${NODE_ENVS.join(', ')}, not "${nodeEnv}"`,
        );
    }

    // ':memory:' keeps the whole database in memory, which the tests use.
    const databasePath = env.DATABASE_PATH || './data/job-tracker.db';

    // A Secure cookie only travels over https. Production has https, so it is on
    // there. Most browsers let http://localhost keep one, but some drop it, so it
    // is off elsewhere.
    let cookieSecure = nodeEnv === 'production';
    if (env.COOKIE_SECURE === 'true') {
        cookieSecure = true;
    } else if (env.COOKIE_SECURE === 'false') {
        cookieSecure = false;
    } else if (env.COOKIE_SECURE) {
        problems.push(
            `COOKIE_SECURE must be true or false, not "${env.COOKIE_SECURE}"`,
        );
    }

    if (problems.length > 0) {
        throw new Error(`Cannot start the server:\n- ${problems.join('\n- ')}`);
    }
    return { port, nodeEnv, databasePath, cookieSecure };
}
