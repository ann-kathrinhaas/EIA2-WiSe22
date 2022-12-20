namespace L10_OldMacDonaldsFarm_Heritage {
    
    export class Cat extends Animal {

        constructor(_name: string, _specie: string, _food: Food, _amount: number, _sound: string) {
            super(_name, _specie, _food, _amount, _sound);
        }

        doSpecialAction(): void {
            console.log("Special action cat");
            animalDiv.innerHTML += "and hunts mice <br><br>";
        }
    }
}