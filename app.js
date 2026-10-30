import express from "express";
import pets from "./pets.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  resposta.send(pets);
});

app.get("/:nome", (req, res) => {
  const nomeInformado = req.params.nome.toLowerCase();
  const pet = pets.find((infoPet) => infoPet.nome === nomeInformado);

  if (pet === undefined) {
    res.status(404).send("Não existe o Pet informado.");
  }

  res.send(pet);
});

/*
app.get("/:tutor", (req, res) => {
  const tutorInformado = req.params.tutor.toLowerCase();
  const dono = pets.find((infoTutor) => infoTutor.tutor === tutorInformado);

  res.send(dono);
});
*/

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
