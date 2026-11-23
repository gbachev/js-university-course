-- One row per logged-in browser. The id is the SHA-256 hash of the token in the
-- session cookie: someone who reads this table still cannot log in with it.
CREATE TABLE sessions (
    id TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    expires_at TEXT NOT NULL,
    created_at TEXT NOT NULL
);

CREATE INDEX sessions_user_id ON sessions (user_id);
