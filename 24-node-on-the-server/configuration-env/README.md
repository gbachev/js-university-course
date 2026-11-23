# Configuration with process.env

Code for the lecture *Configuration with process.env* (section 24, Node.js on the Server) of the JavaScript course at gbachev.com.

Express is installed once for the whole section: run `npm install` inside `24-node-on-the-server` first (see the section's README).

## Examples
- `examples/01-env-strings.js` - every value in `process.env` is a string, or `undefined` when the name is not set
- `examples/02-port-default.js` - `Number(process.env.PORT) || 3000` and the values it gets wrong: `''`, `'0'`, `'abc'`
- `examples/config.js` - `readConfig(env)` reads and checks every setting once and throws one error that lists every problem; a module, used by example 03
- `examples/03-server.js` - the books server with its settings from `config.js`: it stops at start-up with a clear message when a setting is bad or missing
- `examples/04-node-env.js` - what Express's own error page shows a client for a bug, with and without `NODE_ENV=production`
- `examples/.env.example` - the names of the settings, with no secret values; we copy it to `.env`

We run the examples from this folder:

```bash
cd 24-node-on-the-server/configuration-env/examples

PORT=8080 DEBUG=false node 01-env-strings.js
node 02-port-default.js
node 04-node-env.js
NODE_ENV=production node 04-node-env.js
```

Example 03 needs a `.env` file. We copy `.env.example` to `.env` and give `BOOKS_API_KEY` any value, for example `dev-key-123`. The repository's `.gitignore` lists `.env`, so Git never picks it up; `.env.example` is the file we commit. Until the key has a value, the server stops with `BOOKS_API_KEY is missing`:

```bash
cp .env.example .env
node --env-file=.env 03-server.js
# Listening on http://localhost:3000 (development)

# a variable set on the command line wins over the file
PORT=4000 node --env-file=.env 03-server.js
# Listening on http://localhost:4000 (development)
```

The server keeps running until we press Ctrl+C. Examples 01, 02 and 04 run on their own and stop by themselves; 04 also prints the error with its stack in the terminal, the way Express logs it.

## Tasks
1. **Which settings are missing?** (`tasks/01-missing-settings.js`) - `missingSettings(env, names)` returns the names that are not set or are empty strings, in order
2. **One config, checked at start-up** (`tasks/02-read-config.js`) - `readConfig(env)` returns `{ port, nodeEnv, apiKey }` with defaults and conversion, and throws one error that names every bad setting
3. **Error details outside production** (`tasks/03-error-details.js`) - `createApp(config)` takes its `env` setting from the config, and its error handler shows the error's message in development and hides it in production

The tasks take a plain object, not the real `process.env`, so the tests can try any setting without changing the environment. Task 3 exports a `createApp()` function; its tests start it on a free port with `lib/start.js`. Run them with `npm test -- 24-node-on-the-server/configuration-env`. They fail until the task is solved. Compare with `solutions/` after you try.
