namespace L09_OldMacDonaldsFarm {
    
    export class Animal {
        name: string;
        specie: string;
        food: Food;
        amount: number;
        sound: string;

        constructor (_name: string, _specie: string, _food: Food, _amount: number, _sound: string) {
            console.log("Animal constructor");

            this.name = _name;
            this.specie = _specie;
            this.food = _food;
            this.amount = _amount;
            this.sound = _sound;
        }

        sing(): void {
            animalDiv.innerHTML += "Old MacDonald had a farm <br> and on his farm he had a " + this.specie + " named " + this.name + " that makes " + this.sound + " and eats " + this.amount + " kg of " + this.food.type + "<br><br>";
        }

        eat(): void {
            this.food.amount -= this.amount;
        }
    }
}