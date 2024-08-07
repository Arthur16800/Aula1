const prompt = require('prompt-sync')();


let numero1 = parseFloat(prompt('Digite um número: '));
let numero2 = parseFloat(prompt('Digite outro número: '));

function parImpar(num){
    if(num%2 === 0){
        return "par"
    }
    else{
        return "impar"
    }
}

console.log('O número '+ numero1 + ' é ' + parImpar(numero1))
console.log('O número '+ numero2 + ' é ' + parImpar(numero2))