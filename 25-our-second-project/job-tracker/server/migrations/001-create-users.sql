-- One row per account. The email is stored trimmed and in lower case, so
-- Ada@Example.com and ada@example.com are the same account.
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL
);
