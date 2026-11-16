# Development Servers & Live Reload

Code for the lecture *Development Servers & Live Reload* (section 20, Tooling) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-reading-list/` - the reading list page of the lecture, as a Vite project with its own `package.json`:
  - `index.html` - a heading, a text input and the "Books read" button
  - `src/main.js` - the click counter, the `date-fns` line, the `import.meta.env` lines and the `fetch('/api/books')` through the proxy, one after the other
  - `src/style.css` - the heading color, to edit for a hot update
  - `server.js` - the small Node backend on port 3000 (`npm run api`)
  - `vite.config.js` - `server.proxy` sends `/api` to the backend
  - `.env.example` - the two lines of the lecture's `.env`. We copy it to `.env`, because Vite does not read `.env.example`.

We install its packages inside its folder; the rest of the repository stays without dependencies. We need two terminals:

```bash
cd 20-tooling/development-servers-and-live-reload/examples/01-reading-list
npm install
cp .env.example .env
npm run api        # first terminal: the backend on port 3000
npm run dev        # second terminal: open the Local URL, then the console
```

The console shows `16 November 2026`, the covers URL, `undefined`, `development` and `Dune`. Then we type a note, click the button twice, and save `src/style.css` with another color (a hot update keeps both), then save `src/main.js` (a full reload resets both). If another program already uses port 3000, we change the port in `server.js` and `vite.config.js`.

`npm run build` and `npm run preview` build the page and serve `dist/` on port 4173, where `import.meta.env.MODE` is `production`. `npm install` writes a `package-lock.json` and a `node_modules` folder into the example; Git ignores `node_modules`, and we can delete both, `.env` and `dist` when we are done.

## Tasks
1. **Find a free port** (`tasks/01-free-port.js`) - pick the first free port from 5173 up, as Vite does
2. **Where does the proxy send it?** (`tasks/02-proxy.js`) - match a request path to the `server.proxy` config and build the backend URL
3. **What reaches our code from .env** (`tasks/03-env.js`) - read a `.env` file and keep only the `VITE_` variables

Run the tests with `npm test -- 20-tooling/development-servers-and-live-reload`. They fail until the task is solved. Compare with `solutions/` after you try.
