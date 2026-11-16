// Needs an internet connection.
// AbortSignal.timeout() stops the request itself after the given time.
const API = 'https://jsonplaceholder.typicode.com';

async function loadUser(id, ms) {
    try {
        const response = await fetch(`${API}/users/${id}`, {
            signal: AbortSignal.timeout(ms),
        });
        const user = await response.json();
        console.log(user.name);
    } catch (error) {
        if (error.name === 'TimeoutError') {
            console.log(`No answer within ${ms} ms`);
        } else {
            throw error;
        }
    }
}

loadUser(1, 5000).then(() => loadUser(2, 1));
// Leanne Graham
// No answer within 1 ms
