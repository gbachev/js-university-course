export function jobQueue(jobs, log) {
    let index = 0;

    return {
        next() {
            if (index < jobs.length) {
                return { value: jobs[index++], done: false };
            }
            return { value: undefined, done: true };
        },
        return() {
            log.push('closed');
            return { value: undefined, done: true };
        },
        [Symbol.iterator]() {
            return this;
        },
    };
}
