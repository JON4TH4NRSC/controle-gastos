const { adicionarGasto, calcularTotal, removerGasto } = require('../src/main');

test('adicionar gasto', () => {
  adicionarGasto('Almoço', 20);
  expect(calcularTotal()).toBe(20);
});

test('valor negativo', () => {
  expect(() => adicionarGasto('Erro', -10)).toThrow();
});

test('remover gasto', () => {
  adicionarGasto('Cafe', 10);
  removerGasto(0);
  expect(calcularTotal()).toBeGreaterThanOrEqual(0);
});
