const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/gastos.json');

function carregarDados() {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

function salvarDados(gastos) {
  fs.writeFileSync(filePath, JSON.stringify(gastos, null, 2));
}

function adicionarGasto(nome, valor) {
  const gastos = carregarDados();
  if (valor < 0) throw new Error("Valor inválido");
  gastos.push({ nome, valor });
  salvarDados(gastos);
}

function listarGastos() {
  return carregarDados();
}

function removerGasto(index) {
  const gastos = carregarDados();
  gastos.splice(index, 1);
  salvarDados(gastos);
}

function calcularTotal() {
  const gastos = carregarDados();
  return gastos.reduce((t, g) => t + g.valor, 0);
}

module.exports = { adicionarGasto, listarGastos, removerGasto, calcularTotal };
