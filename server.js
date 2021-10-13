const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "senha",
  database: "jogadores",
});

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM jogador";
  db.query(sqlSelect, (err, result) => {
    res.send(result)
  });
});

app.post("/api/insert", (req, res) => {
  const nome = req.body.nome;
  const acertos = req.body.acertos;
  const sqlInsert =
    "INSERT INTO jogador (nome, acertos) VALUE (?,?)";
  db.query(sqlInsert, [nome, acertos], (err, result) => {
    console.log(err);
  });
});

app.listen(3009, () => {
  console.log("rodando na port 3009");
});
