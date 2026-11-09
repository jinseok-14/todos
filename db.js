const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "subjectid058",
  password: "0114",
  database: "todo_app",
  connectionLimit: 5,
});

module.exports = pool;
