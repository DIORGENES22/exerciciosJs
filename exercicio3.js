
function aplicarDesconto(valor, Desconto) {
   return (valor - (valor * Desconto / 100));
}

function aplicarJuros(valor, juros) {
   return (valor + (valor *(juros / 100)))

}


const precoEtiqueta = 100;
const formaDePagameto = 4;



if (formaDePagameto === 1) {
   console.log(aplicarDesconto(precoEtiqueta, 10))
} else if (formaDePagameto === 2) {
   console.log(aplicarDesconto(precoEtiqueta, 15))
} else if (formaDePagameto === 3) {
   console.log(aplicarDesconto(precoEtiqueta, 0))
} else {
   console.log(aplicarJuros(precoEtiqueta, 10))
}
console.log(200 * 0.10);

console.log(10 / 100);