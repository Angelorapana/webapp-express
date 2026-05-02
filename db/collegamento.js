require("dotenv").config();

const mysql = require("mysql2");


const collegamento = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

collegamento.connect((err) => {
  if (err) {
    console.error("Errore connessione:", err);
    return;
  }
  console.log("Connesso al database!");
});

module.exports = collegamento;