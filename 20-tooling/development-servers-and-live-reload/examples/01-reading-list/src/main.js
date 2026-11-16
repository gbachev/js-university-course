import './style.css';
import { format } from 'date-fns';

let read = 0;
const button = document.querySelector('#read');

button.addEventListener('click', () => {
    read++;
    button.textContent = `Books read: ${read}`;
});

console.log(format(new Date(2026, 10, 16), 'd MMMM yyyy'));
// 16 November 2026

// Only VITE_ names from .env reach our code.
console.log(import.meta.env.VITE_COVERS_URL);
// https://covers.openlibrary.org
console.log(import.meta.env.DB_PASSWORD); // undefined
console.log(import.meta.env.MODE); // development

// Through the proxy in vite.config.js. Start the backend first: npm run api
const response = await fetch('/api/books');
const books = await response.json();
console.log(books[0].title); // Dune
