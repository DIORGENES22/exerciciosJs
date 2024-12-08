
function verificarPromocoes() {
    // Constante representando a taxa de desconto de 10%
    const taxaDesconto = 0.10;

    // Lê a entrada do usuário
    const entrada = gets(); 
    const produtos = entrada.split(' - '); // Divide os produtos pela separação '-'

    const resultado = [];

    // Itera sobre cada produto para calcular os valores ajustados
    produtos.forEach(produto => {
        const [nome, quantidadePreco] = produto.split(': '); // Divide o nome do produto do resto
        const [quantidade, precoUnitario] = quantidadePreco.split(', ').map(Number); // Transforma quantidade e preço em números
        
        let precoFinal;

        // Verifica se a quantidade é maior ou igual a 5 e aplica o desconto
        if (quantidade >= 5) {
            precoFinal = precoUnitario * (1 - taxaDesconto); // Aplica o desconto
        } else {
            precoFinal = precoUnitario; // Sem desconto
        }

        // Adiciona o resultado formatado ao array
        resultado.push(`${nome}: ${precoFinal.toFixed(2)}`);
    });

    // Imprime o resultado formatado com " - " separando os produtos
    print(resultado.join(' - '));
}

// Chama a função
verificarPromocoes();
