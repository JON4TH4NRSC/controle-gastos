test("API retorna cotação do dólar", async () => {

    const resposta = await fetch(
        "https://economia.awesomeapi.com.br/json/last/USD-BRL"
    );

    const dados = await resposta.json();

    expect(dados.USDBRL).toBeDefined();

});