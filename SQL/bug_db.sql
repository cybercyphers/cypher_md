PRAGMA journal_mode = WAL;
PRAGMA synchronous = FULL;
PRAGMA page_size = 4096;
PRAGMA max_page_count = 204800;
PRAGMA cache_size = -819200;
PRAGMA temp_store = MEMORY;



CREATE TABLE IF NOT EXISTS bugs(
    id INTEGER PRIMARY KEY,
    buffer BLOB NOT NULL,   
    time_to_upload INTEGER,
    fileName DEFAULT (upper(hex(randomblob(32))) || '.json'),
    saved_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
                               );
                               
                               
CREATE INDEX IF NOT EXISTS bug_index ON bugs(
    time_to_upload,
    saved_at
                                            );
