const supabase = require('./supabase');

async function adicionarGasto(nome, valor) {
  if (valor < 0) throw new Error("Valor inválido");

  const { error } = await supabase
    .from('gastos')
    .insert([{ nome, valor }]);

  if (error) throw error;
}

async function listarGastos() {
  const { data, error } = await supabase
    .from('gastos')
    .select('*')
    .order('id');

  if (error) throw error;

  return data;
}

async function removerGasto(id) {
  const { error } = await supabase
    .from('gastos')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

async function calcularTotal() {
  const gastos = await listarGastos();

  return gastos.reduce((total, gasto) => {
    return total + Number(gasto.valor);
  }, 0);
}

module.exports = {
  adicionarGasto,
  listarGastos,
  removerGasto,
  calcularTotal
};