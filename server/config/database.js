
mysqlConfig = {
    connectionLimit : 100, 
    host     : 'localhost',
    user     : 'root',
    password : '55089727',
    database : 'my_login',
    charset  : 'utf8'
};
var mysql = require('mysql2/promise');
var mysqlPool = mysql.createPool(mysqlConfig);

module.exports = mysqlPool;

// const pool = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '55089727',
//   database : 'my_login'
// });

// var mysql = require('mysql2/promise');
// var pool = mysql.createPool(mysqlConfig);

// module.exports = pool;
// pool.connect();

// pool.query('SELECT * FROM login', (error, rows, fields) => {
//   if (error) {throw error;}
//   console.log('User info is111: ', rows);
// });

// pool.end()