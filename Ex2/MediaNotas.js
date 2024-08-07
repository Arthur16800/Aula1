const prompt = require('prompt-sync')();

let notas = [];
let soma = 0;
let notaValida = true;

for (let i = 0; i < 3; i++) {
    let nota = parseFloat(prompt('Digite suas notas: '));  
    
    if (nota >= 0 && nota <= 10) {
        notas.push(nota); 
        soma += nota;
    } else {
        console.log('Valor inválido');
        notaValida = false;
        break; 
    }
}

if (notaValida && notas.length > 0) { 
    console.log('A média é: ' + (soma / notas.length)); 
}
