PRAGMA journal_mode=WAL;
PRAGMA synchronous=FULL;
PRAGMA page_size = 4096;
PRAGMA max_page_count = 524288;
PRAGMA cache_size = -1048576;


CREATE TABLE IF NOT EXISTS secure_uuid(
    id INTEGER PRIMARY KEY,
    jid TEXT NOT NULL,
    uuid TEXT UNIQUE NOT NULL,
    sent_at DATETIME DEFAULT CURRENT_TIMESTAMP
);



CREATE UNIQUE INDEX IF NOT EXISTS secure_uuid_index ON secure_uuid(
  jid,
  uuid,
  sent_at
);
