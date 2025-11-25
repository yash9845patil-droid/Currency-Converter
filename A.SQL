CREATE DATABASE currency_db;
USE currency_db;
CREATE TABLE conversions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  amount FLOAT,
  from_currency VARCHAR(10),
  to_currency VARCHAR(10),
  result FLOAT,
  conversion_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
