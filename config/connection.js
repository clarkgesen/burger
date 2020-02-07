const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "ewmp49",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE burgers_db", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
});

module.exports = connection;
