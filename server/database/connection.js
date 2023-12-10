const mysql = require("mysql");

// Create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "accredian_db", 
});

db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log("MySQL connected");
});

module.exports = db;
