import express from "express";
import { engine } from "express-handlebars";

const app = express();

app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  const user = {
    name: "Lucas",
    surname: "Scquiavon",
    age: 25,
  };

  res.render("home", { user: user });
});

app.get("/inicio", (req, res) => {
  res.render("inicio");
});

app.listen(3000, () => {
  console.log("Servidor rodando.");
});
