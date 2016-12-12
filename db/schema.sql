DROP TABLE IF EXISTS admin;
DROP TABLE IF EXISTS volunteers;
DROP TABLE IF EXISTS events;

CREATE TABLE admin (
  id SERIAL PRIMARY KEY,
  username VARCHAR(32) NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  email TEXT NOT NULL,
  age INT NOT NULL,
  gender VARCHAR(6) NOT NULL,
  state VARCHAR(2) NOT NULL,
  user_type TEXT
);


CREATE TABLE volunteers (
  id SERIAL PRIMARY KEY,
  username VARCHAR(32) NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  email TEXT NOT NULL,
  age INT NOT NULL,
  gender VARCHAR(6) NOT NULL,
  state VARCHAR(2) NOT NULL,
  qr TEXT,
  user_type TEXT
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  name VARCHAR(32) NOT NULL,
  event_date DATE NOT NULL,
  contact INT FOREIGN KEY,
  volunteers INT FOREIGN KEY
)
