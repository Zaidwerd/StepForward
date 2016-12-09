DROP TABLE IF EXISTS admin;
DROP TABLE IF EXISTS volunteers;

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
  image TEXT,
  user_type TEXT,
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
  image TEXT,
  user_type TEXT,
);
