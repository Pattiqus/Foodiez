DROP DATABASE IF EXISTS myRecipe_db;
CREATE DATABASE myRecipe_db;

USE myRecipe_db;

CREATE TABLE ingrediants (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name NVARCHAR(100) NOT NULL
);

CREATE TABLE recipe (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    recipe_name NVARCHAR(40) NOT NULL,
    Preperation_time INT NOT NULL
);

CREATE TABLE recipe_ingrediants (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    recipe_id INT,
    ingrediants_id INT,
    FOREIGN KEY (recipe_id)
    REFERENCES recipe(id),
    FOREIGN KEY (ingrediants_id)
    REFERENCES ingrediants(id)
);

CREATE TABLE recipe_steps (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    steps TEXT(255)
);






CREATE TABLE method (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    steps NVARCHAR(250) NOT NULL
);

-- CREATE TABLE users (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     username NVCHAR
--     first_name NVARCHAR(40) NOT NULL,
--     last_name NVARCHAR(40) NOT NULL
--     email NVARCHAR(255) NOT NULL
--     passwordHash BINARY
-- )