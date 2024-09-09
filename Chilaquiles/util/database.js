const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'chilaquiles',
    password: 'Yoongobongo09*',
});
module.exports = pool.promise();