const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const pathBase = path.join(__dirname, "templates");

// Middleware de autenticação.
const checkAuth = function (req, res, next) {
  req.authStatus = false;

  if (req.authStatus) {
    console.log("Você está logado, pode seguir...");
    next();
  } else {
    console.log("Não está logado...");
    next();
  }
};

app.use(checkAuth);
app.get("/", (req, res) => {
  res.sendFile(`${pathBase}/index.html`);
});


app.listen(port, () => {
  console.log("Servidor rodando http://localhost:3000");
});
