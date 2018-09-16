
const { Pool } = require('pg');
const databaseConfiguration = require('./secrets/databaseConfiguration');

// new pool class instance passed an obj that defines it:
const pool = new Pool(databaseConfiguration);

module.exports = pool;

// // debugin code to check everything is running correctly:
// pool.query('SELECT * FROM generation', (error, response) => {
//   if (error) return console.log.apply(error, 'errroooorrrr!!!')

//   console.log('response.rows!', response.rows)
// });
