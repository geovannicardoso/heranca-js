import { Animal } from "./Animal";

class Felino extends Animal {
    public emitSom(som: string): void {
        console.log(`Felino emite ${som}`);
        
    }

}
export {Felino};
