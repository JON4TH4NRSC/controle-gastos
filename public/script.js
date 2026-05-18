async function carregar() {

  const res = await fetch('/gastos');
  const gastos = await res.json();

  const lista = document.getElementById('lista');

  lista.innerHTML = '';

  gastos.forEach((g, i) => {

    const li = document.createElement('li');

    li.innerHTML = `
      <span>
        💸 ${g.nome} - 
        R$ ${Number(g.valor).toFixed(2)}
      </span>

      <button onclick="remover(${i})">
        X
      </button>
    `;

    lista.appendChild(li);

  });

  const totalRes = await fetch('/total');

  const totalData = await totalRes.json();

  document.getElementById('total').innerText =
    `R$ ${Number(totalData.total).toFixed(2)}`;

}

/* ADICIONAR */
async function adicionar() {

  const nome =
    document.getElementById('nome').value.trim();

  const valor = parseFloat(
    document.getElementById('valor').value
  );

  if(!nome || isNaN(valor)){

    alert('Preencha os campos');

    return;
  }

  await fetch('/gastos', {

    method:'POST',

    headers:{
      'Content-Type':'application/json'
    },

    body: JSON.stringify({
      nome,
      valor
    })

  });

  document.getElementById('nome').value = '';
  document.getElementById('valor').value = '';

  carregar();

}

/* REMOVER */
async function remover(id){

  await fetch(`/gastos/${id}`, {
    method:'DELETE'
  });

  carregar();

}

/* COTAÇÕES */
async function carregarCotacoes() {

  try {

    const resposta = await fetch(
      'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL'
    );

    const dados = await resposta.json();

    document.getElementById('dolar').innerHTML =
      `💵 Dólar<br>R$ ${Number(dados.USDBRL.bid).toFixed(2)}`;

    document.getElementById('euro').innerHTML =
      `💶 Euro<br>R$ ${Number(dados.EURBRL.bid).toFixed(2)}`;

  } catch (erro) {

    console.log(erro);

  }

}

carregar();
carregarCotacoes();