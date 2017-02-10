-- Creates the "db_name" database --
CREATE DATABASE db_name;
-- Makes it so all of the following code will affect db_name --
USE db_name;

-- Creates the table "tbl_name" within db_name --
CREATE TABLE tbl_name (
  -- Auto-incrementing ID
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL,
  -- Makes a boolean column called "tf" which cannot contain null --
  tf BOOLEAN NOT NULL,
  -- Makes a sting column called "string_name" --
  string_name VARCHAR(30),
  -- Makes an numeric column called "int_name" --
  int_name INTEGER(10)
  -- Makes a decimal column called "dec_name" which shows 4 digits after the decimal point
  dec_name DECIMAL(10,4) NULL,
  -- Sets id as this table's primary key which means all data contained within it will be unique --
  PRIMARY KEY (id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO tbl_name (name, tf, string_name, int_name, dec_name)
VALUES ("Ahmed", TRUE, "String1", 100, 100.1234);

INSERT INTO tbl_name (name, tf, string_name, int_name)
VALUES ("Jacob", TRUE, "String2", 10);

INSERT INTO tbl_name (name, tf)
VALUES ("Peter", FALSE);

-- Updates the row where the column name is "Peter" --
UPDATE tbl_name
SET tf = TRUE, string_name = "String3", int_name = 2
WHERE name = "Peter";

-- Selects all from table "tbl_name"
SELECT * FROM tbl_name;




-- We also learned how to import excel spreadsheets into the database, but I can't find the instructions for that... --