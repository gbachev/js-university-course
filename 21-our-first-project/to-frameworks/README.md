# From Vanilla JavaScript to Frameworks

Code for the lecture *From Vanilla JavaScript to Frameworks* (section 21, Our First Project) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-book-row.html` with `examples/01-book-row.js` - the `BookRow` component that takes props, and a list that owns the books and redraws on every toggle
- `examples/02-object-is.js` - how React skips a render with `Object.is()`, and why `push()` leaves a book off the screen

The page runs in the browser: we start `npm run serve` from the repository folder, open `21-our-first-project/to-frameworks/examples/01-book-row.html` and open the console. The Node example runs with `node 21-our-first-project/to-frameworks/examples/02-object-is.js` from the repository folder.

## React, Vue and Svelte, for reading

These snippets from the lecture are for reading only. JSX and `.vue` and `.svelte` files are compiled before a browser can run them, so they need a build setup: a Vite template such as `npm create vite@latest my-list -- --template react` (or `vue`, or `svelte`).

The row in React, with the list in `useState`:

```jsx
import { useState } from 'react';
import { toggleRead } from './state.js';

function BookRow({ book, onToggle }) {
    return (
        <li className={book.read ? 'is-read' : ''}>
            <span>{book.title}</span>
            <button type="button" onClick={() => onToggle(book.key)}>
                {book.read ? 'Mark unread' : 'Mark read'}
            </button>
        </li>
    );
}

export function MyList({ initialBooks }) {
    const [books, setBooks] = useState(initialBooks);
    const onToggle = (key) => setBooks(toggleRead(books, key));

    return (
        <ul>
            {books.map((book) => (
                <BookRow
                    key={book.key}
                    book={book}
                    onToggle={onToggle}
                />
            ))}
        </ul>
    );
}
```

The row in Vue, as a single-file component; the parent keeps `const books = ref([])`:

```vue
<!-- BookRow.vue -->
<script setup>
defineProps(['book']);
const emit = defineEmits(['toggle']);
</script>

<template>
    <li :class="{ 'is-read': book.read }">
        <span>{{ book.title }}</span>
        <button type="button" v-on:click="emit('toggle', book.key)">
            {{ book.read ? 'Mark unread' : 'Mark read' }}
        </button>
    </li>
</template>
```

The row in Svelte; the parent keeps `let books = $state([])`:

```svelte
<!-- BookRow.svelte -->
<script>
    let { book, onToggle } = $props();
</script>

<li class={book.read ? 'is-read' : ''}>
    <span>{book.title}</span>
    <button type="button" onclick={() => onToggle(book.key)}>
        {book.read ? 'Mark unread' : 'Mark read'}
    </button>
</li>
```

The 300 ms pause of our search as a React effect with its cleanup:

```js
useEffect(() => {
    const timerId = setTimeout(() => runSearch(query), 300);
    return () => clearTimeout(timerId);
}, [query]);
```

## Tasks
1. **A component for a book** (`tasks/01-book-item.html`, our code in `tasks/01-book-item.js`) - a function that takes a book in its props and returns its row, with a Remove button that reports the click
2. **A tag the framework notices** (`tasks/02-add-tag.js`) - fix `addTag()` so it adds a tag to a book with new objects all the way down, not in place
3. **A store with subscribers** (`tasks/03-store.js`) - a `Proxy` store that calls every subscriber when a value changes

For the first task we start `npm run serve` from the repository folder, open the task page and read the checks at the bottom of it. The other two run with `npm test -- 21-our-first-project/to-frameworks` (no `npm install` needed). They fail until the task is solved. Compare with `solutions/` after you try.
