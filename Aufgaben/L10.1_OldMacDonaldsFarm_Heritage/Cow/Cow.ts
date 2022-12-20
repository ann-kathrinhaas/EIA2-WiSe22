namespace L10_OldMacDonaldsFarm_Heritage {
    
    export class Cow extends Animal {

        constructor(_name: string, _specie: string, _food: Food, _amount: number, _sound: string) {
            super(_name, _specie, _food, _amount, _sound);
        }

        doSpecialAction(): void {
           console.log("Special action cow");
           animalDiv.innerHTML += "and produces milk <br><br>";
        }
    }
}