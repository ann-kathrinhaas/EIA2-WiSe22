namespace L10_OldMacDonaldsFarm_Heritage {
    
    export class Pig extends Animal {

        constructor(_name: string, _specie: string, _food: Food, _amount: number, _sound: string) {
            super(_name, _specie, _food, _amount, _sound);
        }

        doSpecialAction(): void {
            console.log("Special action pig");
            animalDiv.innerHTML += "and rolls in the mud <br><br>";
        }
    }
}