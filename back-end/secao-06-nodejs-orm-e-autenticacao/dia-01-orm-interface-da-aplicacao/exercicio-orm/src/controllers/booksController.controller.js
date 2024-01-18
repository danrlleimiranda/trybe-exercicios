const { booksService } = require("../services");

const getAll = async (_req, res) => {
  const books = await booksService.getAll();
  return res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await booksService.getById(id);

  if (!book) return res.status(404).json({ message: "Book not found" });

  return res.status(200).json(book);
};

const insert = async (req, res) => {
  const { title, author, pageQuantity } = req.body;

  const newBook = await booksService.insert(title, author, pageQuantity);

  return res.status(201).json(newBook);
};

const update = async (req, res) => {
    const {id} =req.params;
    const {title, author, pageQuantity} = req.body;
    const book = await booksService.getById(id);
  if (!book) return res.status(404).json({ message: "Book not found" });

  await booksService.update(id, {title, author, pageQuantity});

  return res.status(204).end();
}

module.exports = {
  getAll,
  getById,
  insert,
  update
};
