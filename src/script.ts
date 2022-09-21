import { Felino } from "./Felino";
import { Leão } from "./Leão";

 const felino = new Felino();
 const simba = new Leão('Simba');
 felino.emitSom('rugido');
 simba.emitSom('Rugido');
 simba.caça('Javali');
 simba.caça('Zebra',12);
 simba.caça('Girafa',1, 'Mamifero');

 const numeros: Number[] = [];
 const leões : Leão []= [];

 leões.push(simba);
 const leão1 = new Leão('Scar');
 const leão2 = new Leão('Mufasa');
 const leão3 = new Leão('kofu');
 leões.push(leão1,leão2,leão3);
 leões.pop(); //tira somente o ultimo, se for triar outra posição tera q usar outra função.
 leões.forEach((leões) => (
    console.log(leões.nome)
 ));


 