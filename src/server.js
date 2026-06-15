const express = require('express');
const path = require('path');
const app = express();

const {
  adicionarGasto,
  listarGastos,
  removerGasto,
  calcularTotal
} = require('./main');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/gastos', async (req, res) => {
  const gastos = await listarGastos();
  res.json(gastos);
});

app.post('/gastos', async (req, res) => {
  const { nome, valor } = req.body;

  await adicionarGasto(nome, Number(valor));

  res.sendStatus(200);
});

app.delete('/gastos/:id', async (req, res) => {
  await removerGasto(Number(req.params.id));

  res.sendStatus(200);
});

app.get('/total', async (req, res) => {
  const total = await calcularTotal();

  res.json({ total });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});