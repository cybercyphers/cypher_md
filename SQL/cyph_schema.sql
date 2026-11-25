PRAGMA journal_mode = WAL;
PRAGMA synchronous = FULL;
PRAGMA page_size = 4096;
PRAGMA max_page_count = 524288;
PRAGMA cache_size = -1048576;
PRAGMA temp_store = MEMORY;



CREATE TABLE IF NOT EXISTS cypher_user(
    id TEXT NOT NULL,
    name TEXT NOT NULL, 
    cypher_md_version TEXT,
    isLatest BOOLEAN DEFAULT FALSE,
    engine TEXT,
    connected_at DATETIME DEFAULT CURRENT_TIMESTAMP
); 


CREATE TABLE IF NOT EXISTS Store(
    id TEXT UNIQUE,
    name TEXT,
    remoteJid TEXT,
    fromMe BOOLEAN DEFAULT false,
    remoteJidAlt TEXT NOT NULL,
    conversation BLOB,
    received_at DATETIME DEFAULT CURRENT_TIMESTAMP  
);


CREATE INDEX IF NOT EXISTS chat_unique ON Store(
    id,
    name,
    remoteJid,
    fromMe,
    remoteJidAlt,
    conversation,
    received_at
);
    
  
