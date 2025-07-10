const numeros = document.querySelectorAll('.numero');
const operadores = document.querySelectorAll('.operadores');
const igual = document.getElementById('igual');
const display = document.querySelector('.display');
const limpar = document.getElementById('limpar');

let resultado = 0;

numeros.forEach(botao => {
    botao.addEventListener('click', () => {
        if(display.textContent.length < 9) {
            display.textContent += botao.textContent;
        }
    });
});

limpar.addEventListener('click', () => {
    display.textContent = '';
});

let numeroAnterior = '';
let operador = '';
let numeroAtual = '';

operadores.forEach(operacoes => {
    operacoes.addEventListener('click', () => {
        if(display.textContent.length < 9) {
            numeroAnterior = display.textContent;
            operador = operacoes.textContent;
            display.textContent += '' + operador + '';
        } 
    });
});


igual.addEventListener('click', () => {
    let valores = display.textContent.split(operador);
    display.textContent = '';

    let n1 = Number(valores[0]);
    let n2 = Number(valores[1]);

    switch (operador) {
        case '+': 
        resultado = n1 + n2;
        break 
        case 'x': 
        resultado = n1 * n2;
        break 
        case '/':
        resultado = n1 / n2;
        break
        case '-': 
        resultado = n1 - n2;
        break
        case '%':
        resultado = n1 % n2;
        break
        default:
        resultado = 'Error'; 
    };

    display.textContent = resultado;
});