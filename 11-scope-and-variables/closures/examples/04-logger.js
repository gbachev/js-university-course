function createLogger(prefix) {
    return function(message) {
        console.log(`[${prefix}] ${message}`);
    };
}

const info = createLogger('INFO');
const warn = createLogger('WARN');

info('System initialized'); // [INFO] System initialized
['Cache warmed', 'Server started'].forEach(info);
// [INFO] Cache warmed
// [INFO] Server started

setTimeout(() => warn('Low disk space'), 1000);
// a second later: [WARN] Low disk space
