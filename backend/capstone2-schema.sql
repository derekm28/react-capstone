
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(25),
  password TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL
    CHECK (position('@' IN email) > 1)
);

CREATE TABLE sneakers (
  id SERIAL PRIMARY KEY,
  sneaker_id VARCHAR,
  brand TEXT NOT NULL,
  colorway TEXT NOT NULL,
  name TEXT NOT NULL,
  shoe TEXT NOT NULL,
  title TEXT NOT NULL,
  image_url TEXT
);

CREATE TABLE saved_sneakers(
  user_id int
  REFERENCES users ON DELETE CASCADE,
  sneaker_id int
  REFERENCES sneakers ON DELETE CASCADE
);
