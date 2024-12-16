const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root', // Your MySQL username
    password: 'Harshal@2000', // Your MySQL password
    database: 'notes_db', // Database name
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database');
});

module.exports = db;
