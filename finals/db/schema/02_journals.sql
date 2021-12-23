-- Drop and recreate Journals table

DROP TABLE IF EXISTS journals CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  organization_name VARCHAR(255) NOT NULL,
  phone VARCHAR(15),
  therapist BOOLEAN NOT NULL
);

