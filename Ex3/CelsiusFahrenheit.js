const prompt = require('prompt-sync')();

let grau = parseFloat(prompt('Digite um valor para converter de Celsius para Fahrenheit: '));

function converter(grau) {
    return (grau * 9/5) + 32;
}

console.log('O valor convertido é '+ converter(grau));
