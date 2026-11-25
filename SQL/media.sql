PRAGMA journal_mode=WAL;
PRAGMA synchronous=FULL;
PRAGMA page_size = 4096;
PRAGMA max_page_count = 524288;
PRAGMA cache_size = -1048576;


CREATE TABLE IF NOT EXISTS media_buffer(
    id INTEGER UNIQUE NOT NULL,
    name TEXT,
    remoteJid TEXT,
    fromMe BOOLEAN DEFAULT FALSE,
    remoteJidAlt TEXT,
    extention TEXT,
    mediaType TEXT,
    buffer BLOB NOT NULL,
    recieved_at DATETIME DEFAULT CURRENT_TIMESTAMP
); 



CREATE INDEX IF NOT EXISTS media_buffer_index ON media_buffer(
    name,
    remoteJid,
    fromMe,
    remoteJidAlt,
    extention,
    mediaType,
    buffer,
    recieved_at
);






