// src/database/db.ts
import mysql from "mysql2";
import "dotenv/config";

const connection = mysql.createConnection({
  host: process.env.MYSQLHOST || "localhost",
  user: process.env.MYSQLUSER || "root",
  password: process.env.MYSQLPASS || "",
  database: process.env.MYSQLBBDD || "sandbox",
  port: Number(process.env.MYSQLPORT) || 3306,
});

connection.connect((err) => {
  if (err) {
    console.error("Error conectando a MySQL:", err);
    process.exit(1);
  }
  console.log("Conectado a MySQL correctamente");

  // Crea la tabla si no existe (puedes mover esto a un script de migración)
  const createTable = `
    CREATE TABLE IF NOT EXISTS messages (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  connection.query(createTable, (err) => {
    if (err) console.error("Error creando tabla messages:", err);
    else console.log("Tabla messages lista");
  });
});

export default connection;