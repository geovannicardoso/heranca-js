import { Felino } from "./Felino";

class Leão extends Felino{
    public nome:string ;

    constructor(nome:string){
        super();
        this.nome = nome;

    }
    public emitSom(som: string): void {
        console.log(`Leão emite ${som}`);
    } 
    public caça (presa:string) : void;
    public caça (presa:string, qtdPresas:number): void;
    public caça (presa:string, qdtPressas: number, tipoPresa:string): void

    public caça (presa:string, qdtPressas?: number, tipoPresa?:string){
        if(tipoPresa != undefined){
            console.log(`Leão está caçando um ${tipoPresa}`);
        }
        const numPresas = (qdtPressas == undefined)? 1:qdtPressas;
        console.log(`Leão está caçando ${numPresas} ${presa}`);
    }
}
export {Leão};