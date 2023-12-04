// index.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Import CRUD operations from separate files
const getAllBooksRouter = require("./app/books/getAllBooks");
const addNewBookRouter = require("./app/books/addNewBook");
const updateBookDetailsRouter = require("./app/books/updateBookDetails");

// Use the CRUD operations routers
app.use(getAllBooksRouter);
app.use(addNewBookRouter);
app.use(updateBookDetailsRouter);

// Start the server
app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
