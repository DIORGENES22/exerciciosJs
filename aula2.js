const numero = 5;
const numeroumeroDivisivelPor5= (numero % 5) === 0;

if(numero === 0){
    console.log('O número é inválido');
} else if (numeroumeroDivisivelPor5) {
    console.log('sim');
}else{
    console.log('Não')
}