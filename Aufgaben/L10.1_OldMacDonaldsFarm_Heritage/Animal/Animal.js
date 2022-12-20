"use strict";
var L10_OldMacDonaldsFarm_Heritage;
(function (L10_OldMacDonaldsFarm_Heritage) {
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
            L10_OldMacDonaldsFarm_Heritage.animalDiv.innerHTML += "Old MacDonald had a farm <br> and on his farm he had a " + this.specie + " named " + this.name + " that makes " + this.sound + " and eats " + this.amount + " kg of " + this.food.type + "<br>";
        }
        eat() {
            this.food.amount -= this.amount;
        }
        doSpecialAction() {
            //console.log("Special action animal");
        }
    }
    L10_OldMacDonaldsFarm_Heritage.Animal = Animal;
})(L10_OldMacDonaldsFarm_Heritage || (L10_OldMacDonaldsFarm_Heritage = {}));
//# sourceMappingURL=Animal.js.map