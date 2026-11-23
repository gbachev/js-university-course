-- One row per job application. Every query filters on user_id, so each user
-- only ever sees their own rows.
CREATE TABLE applications (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    company TEXT NOT NULL,
    role TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'wishlist'
        CHECK (status IN ('wishlist', 'applied', 'interview', 'offer', 'rejected')),
    applied_on TEXT,
    url TEXT,
    notes TEXT NOT NULL DEFAULT '',
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

CREATE INDEX applications_user_id ON applications (user_id);
