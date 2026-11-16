// A recursive setTimeout(): the next request leaves only after the previous answer.
function fakeRequest(n, onAnswer) {
    console.log(`Request ${n} sent`);
    setTimeout(() => onAnswer(n), 1500);
}

let count = 0;

function poll() {
    count++;
    fakeRequest(count, (n) => {
        console.log(`Answer ${n}`);
        if (n < 3) {
            setTimeout(poll, 1000);
        }
    });
}

setTimeout(poll, 1000);

// Request 1 sent
// Answer 1
// Request 2 sent
// Answer 2
// Request 3 sent
// Answer 3
