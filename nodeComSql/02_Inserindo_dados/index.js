import express from "express";
import { engine } from "express-handlebars";
import mysql from "mysql";

const app = express();

// Pegando os elementos atráves do body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Config. do Handlebars.
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.static("public"));

// Rota principal.
app.get("/", (req, res) => {
  res.render("home");
});

// Adicionar no BD um novo Livro.
app.post("/books/insertbooks", (req, res) => {
  const title = req.body.title;
  const pageqty = req.body.pageqty;

  const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`;

  conn.query(sql, (err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/books");
  });
});

// Rota para consultar todos os dados salvo no BD.
app.get("/books", (req, res) => {
  const query = "SELECT * FROM books";

  conn.query(query, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const books = data;
    console.log(data);
    res.render("books", { books });
  });
});

// Buscando um livro pelo ID.
app.get("/books/:id", (req, res) => {

  const id = req.params.id;

  const sql = `SELECT * FROM books WHERE id = ${id}`;

  conn.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const book = data[0];
    console.log(book);
    res.render("book", { book });
  });
});

// Conexão com o MySql.
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql",
});

conn.connect((err) => {
  if (err) {
    console.log(err.stack);
    return;
  }

  console.log("Conexão criada com sucesso no BD 🚀💚");

  app.listen(3000, () => {
    console.log("Server is running on 3000!");
  });
});
