const express = require('express');
const path = require('path');
const app = express();

const { adicionarGasto, listarGastos, removerGasto, calcularTotal } = require('./main');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/gastos', (req, res) => {
  res.json(listarGastos());
});

app.post('/gastos', (req, res) => {
  const { nome, valor } = req.body;
  adicionarGasto(nome, Number(valor));
  res.sendStatus(200);
});

app.delete('/gastos/:id', (req, res) => {
  removerGasto(Number(req.params.id));
  res.sendStatus(200);
});

app.get('/total', (req, res) => {
  res.json({ total: calcularTotal() });
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
