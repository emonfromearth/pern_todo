### command for creating a PostgreSQL database
```
CREATE DATABASE perntodo;
```
### command for creating a PostgreSQL database table
```
CREATE TABLE todo (
    id SERIAL PRIMARY KEY,
    description VARCHAR(255));
```
command for interacting with the database

- \l to see all database
- \d to see all tables
- \dt to see all columns in a table
- \c to connect to a database