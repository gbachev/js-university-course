// We log, then exit with a non-zero code: it is not safe to carry on after an
// uncaught exception. The file ends with exit code 1 on purpose.
process.on('uncaughtException', (error) => {
    console.error(`Fatal: ${error.message}`);
    process.exit(1);
});

setTimeout(() => {
    throw new Error('Database connection lost');
}, 0);

// Fatal: Database connection lost
