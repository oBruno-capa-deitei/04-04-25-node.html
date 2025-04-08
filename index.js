import mysql from 'mysql2';

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'senac@02',
    database: 'bruno'
}).promise();

const result = await pool.query("SELECT * FROM sakila.address;");
console.log(result);