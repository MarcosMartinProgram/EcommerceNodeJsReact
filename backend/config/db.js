const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'mysql-cacmarcos.alwaysdata.net', 
  user: 'cacmarcos_nodejs', 
  password: 'm30p468m401', 
  database: 'cacmarcos_nodejs' 
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id', connection.threadId);
  connection.release(); // Release the connection back to the pool
});

module.exports = pool.promise();
