// finally runs on a break, on return() and on throw() from outside.
function* readLines() {
    console.log('open file');
    try {
        yield 'line 1';
        yield 'line 2';
        yield 'line 3';
    } finally {
        console.log('close file');
    }
}

for (const line of readLines()) {
    console.log(line);
    if (line === 'line 2') break;
}
// open file
// line 1
// line 2
// close file

const lines = readLines();
lines.next(); // open file
console.log(lines.return('stopped'));
// close file
// { value: 'stopped', done: true }
console.log(lines.next()); // { value: undefined, done: true }

const broken = readLines();
broken.next(); // open file
try {
    broken.throw(new Error('disk full'));
} catch (error) {
    console.log(error.message);
}
// close file
// disk full
