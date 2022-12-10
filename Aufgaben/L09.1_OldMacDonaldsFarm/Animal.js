"use strict";
var L09_OldMacDonaldsFarm;
(function (L09_OldMacDonaldsFarm) {
    class Animal {
        name;
        specie;
        food;
        amount;
        sound;
        constructor(_name, _specie, _food, _amount, _sound) {
            console.log("Animal constructor");
            this.name = _name;
            this.specie = _specie;
            this.food = _food;
            this.amount = _amount;
            this.sound = _sound;
        }
        sing() {
            L09_OldMacDonaldsFarm.animalDiv.innerHTML += "Old MacDonald had a farm <br> and on his farm he had a " + this.specie + " named " + this.name + " that makes " + this.sound + " and eats " + this.amount + " kg of " + this.food.type + "<br><br>";
        }
        eat() {
            this.food.amount -= this.amount;
        }
    }
    L09_OldMacDonaldsFarm.Animal = Animal;
})(L09_OldMacDonaldsFarm || (L09_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Animal.js.map