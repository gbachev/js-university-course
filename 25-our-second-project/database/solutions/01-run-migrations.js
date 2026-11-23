export function runMigrations(db, files) {
    const current = db.pragma('user_version', { simple: true });
    const migrations = files
        .filter((file) => file.name.endsWith('.sql'))
        .map((file) => {
            const version = Number.parseInt(file.name, 10);
            if (!Number.isInteger(version)) {
                throw new Error(`Migration ${file.name} must start with its number`);
            }
            return { ...file, version };
        })
        // Numbers, not text: as text, '10-...' sorts before '2-...'.
        .sort((a, b) => a.version - b.version);

    const ran = [];
    for (const { name, sql, version } of migrations) {
        if (version <= current) {
            continue;
        }
        db.transaction(() => {
            db.exec(sql);
            db.pragma(`user_version = ${version}`);
        })();
        ran.push(name);
    }
    return ran;
}
