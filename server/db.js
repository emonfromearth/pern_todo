const pg = require('pg');
const Pool = pg.Pool;
// dotenv is used to read the .env file
require('dotenv').config();

// database configuration data
const config = {
    user: process.env.USER,
    password: process.env.PASS,
    host: process.env.HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE,
};

// setup database connection with config data
const pool = new Pool(config);

module.exports = pool;