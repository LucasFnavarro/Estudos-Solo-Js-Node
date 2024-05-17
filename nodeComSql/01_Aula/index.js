import express from "express";
import { engine } from "express-handlebars";
import mysql from "mysql";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodemysql'
});

conn.connect((err) => {
  if(err){
    console.log(err.stack);
    return;
  }
  
  console.log('Conexão criada com sucesso no BD 🚀💚');

  app.listen(3000, () => {
    console.log('Server is running on 3000!');
  })

})