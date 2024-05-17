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
  };

  const aviso = "Estamos usando express com handlebars 😃";

  res.render("home", { user: user, aviso });
});

app.get("/inicio", (req, res) => {
  res.render("inicio");
});

app.listen(3000, () => {
  console.log("Server is running 🚀");
});
