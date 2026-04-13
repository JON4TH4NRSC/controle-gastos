async function carregar() {
  const res = await fetch('/gastos');
  const gastos = await res.json();

  const lista = document.getElementById('lista');
  lista.innerHTML = '';

  gastos.forEach((g, i) => {
    const li = document.createElement('li');
    li.innerHTML = `${g.nome} - R$ ${g.valor} <button onclick="remover(${i})">X</button>`;
    lista.appendChild(li);
  });

  const totalRes = await fetch('/total');
  const totalData = await totalRes.json();
  document.getElementById('total').innerText = totalData.total;
}

async function adicionar() {
  const nome = document.getElementById('nome').value;
  const valor = document.getElementById('valor').value;

  await fetch('/gastos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, valor })
  });

  document.getElementById('nome').value = '';
  document.getElementById('valor').value = '';

  carregar();
}

async function remover(id) {
  await fetch(`/gastos/${id}`, { method: 'DELETE' });
  carregar();
}

carregar();
