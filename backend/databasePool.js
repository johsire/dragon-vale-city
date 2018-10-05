
const { Pool } = require('pg');
const databaseConfiguration = require('./secrets/databaseConfiguration');

// new pool class instance passed an obj that defines it:
const pool = new Pool(databaseConfiguration);

module.exports = pool;
