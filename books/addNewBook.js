const express = require("express");
const mysql = require("mysql2/promise");

const router = express.Router();

const dbConfig = {
host: "localhost",
user: "your_mysql_user",
password: "your_mysql_password",
database: "library",
};

router.post("/api/books", async (req, res) => {
const { title, author, publishedYear } = req.body;

// Validate request payload
if (!title || !author || !publishedYear) {
return res.status(400).json({ error: "Invalid request payload" });
}

try {
const connection = await mysql.createConnection(dbConfig);
const [result] = await connection.execute(
"INSERT INTO books (title, author, publishedYear) VALUES (?, ?, ?)",
[title, author, publishedYear]
);
connection.end();
const newBookId = result.insertId;

res.status(201).json({ id: newBookId, title, author, publishedYear });
} catch (error) {
console.error(error);
res.status(500).send("Internal Server Error");
}
});

module.exports = router;
 