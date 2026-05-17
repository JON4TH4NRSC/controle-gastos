async function carregarCotacoes() {

    try {

        const resposta = await fetch(
            "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL"
        );

        const dados = await resposta.json();

        document.getElementById("dolar").innerHTML =
            `Dólar: R$ ${dados.USDBRL.bid}`;

        document.getElementById("euro").innerHTML =
            `Euro: R$ ${dados.EURBRL.bid}`;

    } catch (erro) {

        console.log("Erro ao buscar cotações", erro);

    }

}

carregarCotacoes();