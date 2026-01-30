const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'rootpass',
  database: process.env.DB_NAME || 'chatapp'
});

db.connect(err => {
  if (err) {
    console.error('Error conectando a MySQL:', err);
  } else {
    console.log('MySQL conectado');
  }
});

module.exports = db;
