import express from "express";
import { engine } from "express-handlebars";

const app = express();
const port = 3333;

app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  const authUser = false;
  const verify = false;
  const user = {
    name: "Lucas",
    surname: "Scquiavon",
  };

  res.render("home", { user: user, authUser, verify });
});

app.get("/inicio", (req, res) => {
  res.render("inicio");
});

app.get("/dashboard", (req, res) => {
  const items = ["Item1", "Item 2", "Item 3"];

  res.render("dashboard", { items });
});

app.listen(port, () => {
  console.log("Servidor handlebars ligado com sucesso 🚀");
});
