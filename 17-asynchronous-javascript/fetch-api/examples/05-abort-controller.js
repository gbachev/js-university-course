// Needs an internet connection.
// Each search aborts the request of the search before it.
const API = 'https://jsonplaceholder.typicode.com';
let controller = null;

async function search(text) {
    controller?.abort();
    controller = new AbortController();

    try {
        const response = await fetch(`${API}/users?q=${text}`, {
            signal: controller.signal,
        });
        const users = await response.json();
        console.log(`${text}: ${users.length} found`);
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log(`${text}: cancelled`);
        } else {
            throw error;
        }
    }
}

search('Le');
search('Leanne');
// Le: cancelled
// Leanne: 1 found
