import { Calculadora } from './calculadora.js';
const botao = document.querySelector('.btn');
botao.addEventListener('click', event => {
    event.preventDefault();
    const calculo = new Calculadora();
    calculo.mostrar();
});
