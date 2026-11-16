// Since Node 15 an unhandled rejection crashes the process. The file ends with exit
// code 1 on purpose.
process.on('unhandledRejection', (reason) => {
    console.error(`Unhandled rejection: ${reason.message}`);
    process.exit(1);
});

Promise.reject(new Error('Order service timed out'));

// Unhandled rejection: Order service timed out
