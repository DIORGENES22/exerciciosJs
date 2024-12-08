class Pessoa {
    nome;
    peso;
    altura

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){
    const imc = this.calcularImc();
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc <= 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc <= 40) {
        return 'obesidade';
    } else {
        return 'Obesidade grave';
    }

    }

}

const jose = new Pessoa('jose', 73, 1.77);
console.log(jose.classificarImc());
const renam = new Pessoa('renam', 76, 1.75);
console.log(renam.classificarImc());
const diorgenes = new Pessoa('Diórgenes', 72, 1.77);
console.log(diorgenes.classificarImc())



