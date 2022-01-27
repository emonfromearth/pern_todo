const pg = require('pg');
const Pool = pg.Pool;

// database configuration data
const config = {
    user: 'zrgumgzu',
    password: 'VZ8Tmf9HuELPO1siZM_gl9CA2AAlg7SA',
    host: 'arjuna.db.elephantsql.com',
    port: 5432,
    database: 'zrgumgzu',
};

// setup database connection with config data
const pool = new Pool(config);

module.exports = pool;