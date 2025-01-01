const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 2, title: "1984", author: "George Orwell", year: 1949 },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
];

app.get("/", (req, res) => {
  res.send("Welcome to the Books API!");
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
