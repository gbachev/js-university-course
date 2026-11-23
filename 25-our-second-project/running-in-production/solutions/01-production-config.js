import { isAbsolute } from 'node:path';

// The same shape as readConfig() in job-tracker/server/src/config.js: every problem
// is collected, then one error lists them all. The default database path stays for
// development; in production only an absolute path will do, because it has to point
// at the folder where the host mounts the disk.
export function readProductionConfig(env) {
    const problems = [];

    const nodeEnv = env.NODE_ENV || 'development';

    const port = Number(env.PORT || '3000');
    if (!Number.isInteger(port) || port < 0 || port > 65535) {
        problems.push(`PORT must be a whole number from 0 to 65535, not "${env.PORT}"`);
    }

    let databasePath = env.DATABASE_PATH || './data/job-tracker.db';
    if (nodeEnv === 'production') {
        databasePath = env.DATABASE_PATH;
        if (!databasePath) {
            problems.push('DATABASE_PATH must be set in production');
        } else if (!isAbsolute(databasePath)) {
            problems.push(`DATABASE_PATH must be an absolute path in production, not "${databasePath}"`);
        }
    }

    if (problems.length > 0) {
        throw new Error(`Cannot start the server:\n- ${problems.join('\n- ')}`);
    }
    return { nodeEnv, port, databasePath };
}
