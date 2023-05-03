import input from 'readline-sync'

let saldoDevedor = input.question('Informe o valor devido: R$ ');
let diasAtraso = input.question('Informe quantos dias de atraso: ')
let saldoTotal
let valorJuros
let juros

if(saldoDevedor == 0){
    console.log('O valor da dívida deve ser maior que zero!');
}else if(diasAtraso == 0){
    console.log('Você está em dia!');
}else if(diasAtraso > 15){
    valorJuros = (saldoDevedor/100) * 10;
    juros = "10%"
    saldoTotal = Number(saldoDevedor) + Number(valorJuros)
}else{
    valorJuros = (saldoDevedor/100) * 5;
    juros = "5%"
    saldoTotal = Number(saldoDevedor) + Number(valorJuros)
}

console.log(`\nValor original da dívida: ${saldoDevedor}`),
console.log(`Dias atrasados: ${diasAtraso}`),
console.log(`Taxa de Juros: ${juros}`),
console.log(`Valor total com juros: ${saldoTotal}`)
