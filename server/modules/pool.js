const pg = require('pg');
const config = {
  database: 'react_gallery',
  host: 'localhost',
  port: 5432
};

const pool = new pg.Pool(config);

pool.on("connect", () => {
  console.log('connected to postgres');
});

pool.on("error", (error) => {
  console.log('ERROR: Connecting to postgres', error);
});

module.exports = pool; 