const express = require("express");
const { engine } = require("express-handlebars");
const pool = require("./bd/conn");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("inicial");
});

app.post("/books/criarbook", (req, res) => {
  const title = req.body.title;
  const pageqty = req.body.pageqty;
  const author = req.body.author;

  const insertBook = `INSERT INTO books2 (title, pageqty, author) VALUES ('${title}', '${pageqty}', '${author}')`;

  pool.query(insertBook, (err) => {
    if (err) throw err;
  });
  res.redirect("/books");
});

app.get("/books", (req, res) => {
  const selectBooks = "SELECT * FROM books2";

  pool.query(selectBooks, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const books = data;
    console.log(data);
    res.render("books", { books });
  });
});

app.get("/books/:id", (req, res) => {
  const id = req.params.id;

  const selectUserId = `SELECT * FROM books2 WHERE id = ${id}`;

  pool.query(selectUserId, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const books = data[0];
    res.render("book", { books });
  });
});

app.get("/books/edit/:id", (req, res) => {
  const id = req.params.id;

  const editarBook = `SELECT * FROM books2 WHERE id = ${id}`;

  pool.query(editarBook, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const book = data[0];
    res.render("editBooks", { book });
  });
});

app.post("/books/updatebook", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const pageqty = req.body.pageqty;
  const author = req.body.author;

  const updateBooks = `UPDATE books2 SET title = '${title}', pageqty = '${pageqty}', author = '${author}' WHERE id = ${id}`;

  pool.query(updateBooks, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect("/books");
  });
});

app.listen(3000, () => {
  console.log("servidor rodando...");
});
