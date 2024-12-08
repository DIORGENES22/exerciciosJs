function escreveMeuNome(nome) {
    return 'Seu nome é: ' + nome;

}



function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escreveMeuNome('Diorgenes: ') + 'E você é maior de idade');
    } else {
        console.log(escreveMeuNome('Diorgenes: ') + 'E você é menor de idade')
    }
}

verificarIdade(17);