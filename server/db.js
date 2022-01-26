const pg = require('pg');
const Pool = pg.Pool;

// database configuration data
const config = {
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: 1234,
    database: 'perntodo',
};

// setup database connection with config data
const pool = new Pool(config);

module.exports = pool;