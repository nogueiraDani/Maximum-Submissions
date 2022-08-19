import { Tempo } from "./tempo.js";
export class Calculadora {
    constructor(tempo = new Tempo('#input')) {
        this.tempo = tempo;
        this.input = document.querySelector('#input');
    }
    calcular() {
        const segundo = this.tempo.converterEmSegundos();
        const resultado = segundo / 30;
        return resultado;
    }
    mostrar() {
        const resultado = this.calcular();
        document.querySelector('#output').innerHTML = resultado.toString();
        this.input.focus();
        this.input.addEventListener('click', () => this.limpar());
    }
    limpar() {
        this.input.value = "";
    }
}
