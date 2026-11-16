// Polling with setInterval(): request 2 leaves before request 1 is answered.
function fakeRequest(n, onAnswer) {
    console.log(`Request ${n} sent`);
    setTimeout(() => onAnswer(n), 1500);
}

let count = 0;

const pollId = setInterval(() => {
    count++;
    fakeRequest(count, (n) => console.log(`Answer ${n}`));
    if (count === 3) {
        clearInterval(pollId);
    }
}, 1000);

// Request 1 sent
// Request 2 sent
// Answer 1
// Request 3 sent
// Answer 2
// Answer 3
