CREATE TABLE IF NOT EXISTS forbidden_timer(
    id INTEGER PRIMARY KEY,
    _identifier TEXT VARCHAR(18) UNIQUE NOT NULL,
    hours TEXT,
    set_at DATETIME DEFAULT CURRENT_TIMESTAMP
);


CREATE INDEX IF NOT EXISTS banned_users ON  forbidden_timer(
  _identifier,
  hours,
  set_at
);
