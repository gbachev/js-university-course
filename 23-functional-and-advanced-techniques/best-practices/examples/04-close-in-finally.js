// Better: finally closes the file on a break too.
function* readLinesSafely() {
    console.log('open file');
    try {
        yield 'line 1';
        yield 'line 2';
    } finally {
        console.log('close file');
    }
}

for (const line of readLinesSafely()) {
    if (line === 'line 1') break;
}
// open file
// close file
