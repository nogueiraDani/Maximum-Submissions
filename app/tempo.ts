export class Tempo {

    private elemento: HTMLInputElement;

    constructor(string: string){
        this.elemento = document.querySelector(string);
    }

    converterEmSegundos():number {
        const segundo = this.elemento.value;
        return parseInt(segundo)*60;
    }
    
}