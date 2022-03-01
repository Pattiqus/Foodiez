DROP DATABASE IF EXISTS myRecipe_db;
CREATE DATABASE myRecipe_db;

USE myRecipe_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name NVARCHAR(40) NOT NULL,
    last_name NVARCHAR(40) NOT NULL
    email NVARCHAR(255) NOT NULL
    passwordHash BINARY
)