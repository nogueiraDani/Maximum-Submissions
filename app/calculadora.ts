import { Tempo } from "./tempo.js"

export class Calculadora {
    private input: HTMLInputElement = document.querySelector('#input');

    constructor(
        private tempo = new Tempo('#input')
    ) {}

    calcular(): number {
        const segundo:number = this.tempo.converterEmSegundos();
        const resultado:number = segundo / 30;
        return resultado;
    }
    mostrar(): void {
        const resultado:number = this.calcular();
        document.querySelector('#output').innerHTML = resultado.toString();
        this.input.focus();
        this.input.addEventListener('click', () => this.limpar());
    }
    limpar(): void {
        this.input.value = "";
    }
}