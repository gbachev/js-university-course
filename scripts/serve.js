// A small static server for the lectures that run in the browser.
// Pages that load ES modules do not work from file://, so we open them through it.
//
//   npm run serve        then open the address it prints
import { createServer } from 'node:http';
import { readdir, readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const port = Number(process.env.PORT) || 8080;
const types = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.mjs': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.txt': 'text/plain; charset=utf-8',
};

async function exists(path) {
    try {
        await stat(path);
        return true;
    } catch {
        return false;
    }
}

// A folder without an index.html gets a plain list of links, so we can click our way to a page.
async function listing(folder, urlPath) {
    const base = urlPath.endsWith('/') ? urlPath : `${urlPath}/`;
    const names = (await readdir(folder, { withFileTypes: true }))
        .filter((entry) => !entry.name.startsWith('.') && entry.name !== 'node_modules')
        .map((entry) => (entry.isDirectory() ? `${entry.name}/` : entry.name))
        .sort();
    const items = names.map((name) => `<li><a href="${base}${encodeURI(name)}">${name}</a></li>`).join('');
    return `<!doctype html><meta charset="utf-8"><title>${base}</title><h1>${base}</h1><ul>${items}</ul>`;
}

const server = createServer(async (request, response) => {
    const url = new URL(request.url, `http://localhost:${port}`);
    let path = normalize(join(root, decodeURIComponent(url.pathname)));
    if (!path.startsWith(root.endsWith(sep) ? root : root + sep) && path !== root) {
        response.writeHead(403).end('Forbidden');
        return;
    }
    try {
        if ((await stat(path)).isDirectory()) {
            const index = join(path, 'index.html');
            if (!(await exists(index))) {
                response.writeHead(200, { 'Content-Type': types['.html'] });
                response.end(await listing(path, url.pathname));
                return;
            }
            path = index;
        }
        const body = await readFile(path);
        response.writeHead(200, { 'Content-Type': types[extname(path)] ?? 'application/octet-stream' });
        response.end(body);
    } catch {
        response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found');
    }
});

// Only this computer can open it, not others on the same network.
server.listen(port, '127.0.0.1', () => {
    console.log(`Serving the course folder at http://localhost:${port}/`);
    console.log('Open a lecture page, for example:');
    console.log(`  http://localhost:${port}/18-dom-and-dom-operations/`);
    console.log('Press Ctrl+C to stop.');
});
