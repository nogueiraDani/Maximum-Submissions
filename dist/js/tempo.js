export class Tempo {
    constructor(string) {
        this.elemento = document.querySelector(string);
    }
    converterEmSegundos() {
        const segundo = this.elemento.value;
        return parseInt(segundo) * 60;
    }
}
