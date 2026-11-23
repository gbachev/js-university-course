// Starts the books API of books-app.js on port 3000.
// Start it from the repository folder and call it with curl, for example:
//   curl -i http://localhost:3000/books -H "Content-Type: application/json" \
//       -d '{"key":"ubik","title":"Ubik","author":"Philip K. Dick"}'
//   curl -i http://localhost:3000/books -H "Content-Type: application/json" -d '{"key":"ubik",'
//   curl -i http://localhost:3000/broken
// Stop it with Ctrl+C.
import { app } from './books-app.js';

app.listen(3000, (error) => {
    if (error) {
        throw error;
    }
    console.log('Listening on http://localhost:3000');
});
