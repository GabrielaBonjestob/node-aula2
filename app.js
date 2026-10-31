import express from "express";
import pets from "./pets.js";

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.send(pets);
});

app.get("/:nome", (req, res) => {
  const nomeInformado = req.params.nome.toLowerCase();
  const pet = pets.find((infoPet) => infoPet.nome === nomeInformado);

  if (pet === undefined) {
    res.status(404).send("Não existe o Pet informado.");
  }

  res.send(pet);
});

app.put("/:nome", (req, res) => {
  const nomeInformado = req.params.nome.toLowerCase();
  const nomeSelecionado = pets.find((pet) => pet.nome === nomeInformado);
  const campos = Object.keys(req.body);

  for (let campo of campos) {
    nomeSelecionado[campo] = req.body[campo];
  }

  res.status(200).send(nomeSelecionado);
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
