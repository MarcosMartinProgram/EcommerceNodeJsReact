const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST ||  mysql-cacmarcos.alwaysdata.net,
  user: process.env.DB_USER || cacmarcos_nodejs,
  password: process.env.DB_PASSWORD || m30p468m401,
  database: process.env.DB_NAME || cacmarcos_nodejs,
});

module.exports = pool.promise();
