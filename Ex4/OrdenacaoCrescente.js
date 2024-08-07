const prompt = require('prompt-sync')();

let quantidade = parseFloat(prompt('Digite quantos numeros você ira enviar: '));

let numeros = [];

for(i = 0; i < quantidade; i++){
    var numeroRecebido = parseFloat(prompt('Digite o número: '));
    numeros.push(numeroRecebido);
}


console.log('Sua lista: ['+numeros+']');