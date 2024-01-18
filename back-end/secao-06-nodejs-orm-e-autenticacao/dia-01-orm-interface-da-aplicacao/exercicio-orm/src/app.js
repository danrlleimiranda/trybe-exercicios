const express = require("express");
require("express-async-errors");
const app = express();

const { booksController } = require("./controllers");

app.use(express.json());

app.get("/books", booksController.getAll);
app.post("/books", booksController.insert);
app.get("/books/:id", booksController.getById);
app.put("/books/:id", booksController.update);

app.use((error, _req, res, _next) => {
  return res.status(500).json({ error: error.message });
});

module.exports = app;
