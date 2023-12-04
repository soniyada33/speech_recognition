const express = require("express");
const mysql = require("mysql2/promise");

const router = express.Router();

const dbConfig = {
host: "localhost",
user: "your_mysql_user",
password: "your_mysql_password",
database: "library",
};

router.get("/api/books", async (req, res) => {
try {
const connection = await mysql.createConnection(dbConfig);
const [rows] = await connection.execute("SELECT * FROM books");
connection.end();
res.json(rows);
} catch (error) {
console.error(error);
res.status(500).send("Internal Server Error");
}
});

module.exports = router;
 