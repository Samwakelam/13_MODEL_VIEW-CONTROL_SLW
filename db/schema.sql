DROP SCHEMA IF EXISTS burgers_db;
CREATE SCHEMA burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  id INT AUTO_INCREMENT PRIMARY KEY, 
  burger_name VARCHAR(100), 
  devoured BOOLEAN
);

