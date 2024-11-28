CREATE DATABASE quizdb;

USE quizdb;

CREATE TABLE rankings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    acertos INT NOT NULL,
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
