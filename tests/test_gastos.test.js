const {
  adicionarGasto,
  calcularTotal,
  removerGasto,
  listarGastos
} = require('../src/main');

test('valor negativo', async () => {
  await expect(
    adicionarGasto('Erro', -10)
  ).rejects.toThrow('Valor inválido');
});

test('listar gastos retorna um array', async () => {
  const gastos = await listarGastos();

  expect(Array.isArray(gastos)).toBe(true);
});

test('calcular total retorna número', async () => {
  const total = await calcularTotal();

  expect(typeof total).toBe('number');
});