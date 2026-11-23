import { mkdirSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import Database from 'better-sqlite3';

const MIGRATIONS_DIR = join(import.meta.dirname, '..', 'migrations');

// Opens the SQLite file at `path`, creating the file and its folder when they are
// missing. ':memory:' gives a fresh, empty database that lives only in memory.
export function openDatabase(path) {
    const inMemory = path === ':memory:';
    if (!inMemory) {
        mkdirSync(dirname(path), { recursive: true });
    }

    const db = new Database(path);
    // SQLite ignores REFERENCES and ON DELETE CASCADE until we switch this on,
    // and the setting lasts only as long as this connection.
    db.pragma('foreign_keys = ON');
    if (!inMemory) {
        // Write-ahead logging: readers no longer wait for a writer to finish.
        db.pragma('journal_mode = WAL');
    }
    return db;
}

// Runs the files of migrations/ that this database has not seen yet, in order.
// Each file starts with its number (001-create-users.sql), and the database
// remembers the number of the last one it ran in PRAGMA user_version.
export function migrate(db) {
    const files = readdirSync(MIGRATIONS_DIR)
        .filter((name) => name.endsWith('.sql'))
        .sort();
    const current = db.pragma('user_version', { simple: true });

    for (const file of files) {
        const version = Number.parseInt(file, 10);
        if (!Number.isInteger(version)) {
            throw new Error(`Migration ${file} must start with its number`);
        }
        if (version <= current) {
            continue;
        }

        const sql = readFileSync(join(MIGRATIONS_DIR, file), 'utf8');
        // All or nothing: if the file fails halfway, the database stays as it was.
        db.transaction(() => {
            db.exec(sql);
            // PRAGMA does not take bound parameters. `version` is a number we
            // read from our own file name, never a value from a request.
            db.pragma(`user_version = ${version}`);
        })();
    }
}
