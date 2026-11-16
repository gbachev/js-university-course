// return() runs when we stop early: on a break, and when we destructure the first value.
const queue = {
    jobs: ['email', 'resize', 'backup'],

    [Symbol.iterator]() {
        const jobs = this.jobs;
        let index = 0;

        return {
            next() {
                if (index < jobs.length) {
                    return { value: jobs[index++], done: false };
                }
                return { value: undefined, done: true };
            },
            return() {
                console.log('closing the queue');
                return { value: undefined, done: true };
            }
        };
    }
};

for (const job of queue) {
    console.log(job);
    if (job === 'resize') {
        break;
    }
}
// email
// resize
// closing the queue

const [firstJob] = queue; // closing the queue
console.log(firstJob); // email
