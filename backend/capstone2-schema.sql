
CREATE TABLE users (
  username VARCHAR(25) PRIMARY KEY,
  password TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL
    CHECK (position('@' IN email) > 1),
  is_admin BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE sneakers (
  sneaker_id VARCHAR(25) PRIMARY KEY,
  title TEXT NOT NULL,
  brand TEXT NOT NULL,
  colorway TEXT NOT NULL,
  name TEXT NOT NULL,
  shoe TEXT NOT NULL,
  image_url TEXT
);

CREATE TABLE saved_sneakers (
  username VARCHAR(25)
    REFERENCES users ON DELETE CASCADE,
  sneaker_id INTEGER
    REFERENCES sneakers ON DELETE CASCADE,
  PRIMARY KEY (username, sneaker_id)
);
