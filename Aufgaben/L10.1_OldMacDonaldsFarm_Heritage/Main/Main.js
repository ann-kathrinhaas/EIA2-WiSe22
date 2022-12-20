"use strict";
/*
Aufgabe: L10.1 Old MacDonals Farm Heritage
Name: Ann-Kathrin Haas
Matrikel: 271111
Datum: 20.12.22
Quellen: -
*/
var L10_OldMacDonaldsFarm_Heritage;
(function (L10_OldMacDonaldsFarm_Heritage) {
    window.addEventListener("load", handleLoad);
    let food = [
        new L10_OldMacDonaldsFarm_Heritage.Food("grass", 50),
        new L10_OldMacDonaldsFarm_Heritage.Food("meat", 80),
        new L10_OldMacDonaldsFarm_Heritage.Food("fish", 15),
        new L10_OldMacDonaldsFarm_Heritage.Food("junk", 60),
        new L10_OldMacDonaldsFarm_Heritage.Food("hay", 40),
        new L10_OldMacDonaldsFarm_Heritage.Food("grains", 20)
    ];
    let animals = [];
    animals.push(new L10_OldMacDonaldsFarm_Heritage.Cow("Milka", "cow", food[0], 10, "moo"));
    animals.push(new L10_OldMacDonaldsFarm_Heritage.Dog("Lassie", "dog", food[1], 5, "woo"));
    animals.push(new L10_OldMacDonaldsFarm_Heritage.Cat("Garfield", "cat", food[2], 3, "miau"));
    animals.push(new L10_OldMacDonaldsFarm_Heritage.Pig("Rudi", "pig", food[3], 16, "oink"));
    animals.push(new L10_OldMacDonaldsFarm_Heritage.Pig("Peppa", "pig", food[3], 26, "oink oink"));
    animals.push(new L10_OldMacDonaldsFarm_Heritage.Horse("Spirit", "horse", food[4], 12, "hüh"));
    animals.push(new L10_OldMacDonaldsFarm_Heritage.Chicken("Trudhilde", "chicken", food[5], 2, "cock-a-doodle-do"));
    function handleLoad() {
        console.log("Old MacDonalds Farm");
        L10_OldMacDonaldsFarm_Heritage.animalDiv = document.querySelector("#animals");
        L10_OldMacDonaldsFarm_Heritage.foodDiv = document.querySelector("#food");
        for (let animal of animals) {
            animal.sing();
            animal.eat();
            animal.doSpecialAction();
        }
        L10_OldMacDonaldsFarm_Heritage.foodDiv.innerHTML = "";
        for (let foodItem of food) {
            L10_OldMacDonaldsFarm_Heritage.foodDiv.innerHTML += foodItem.type + ": " + foodItem.amount + " kg <br>";
        }
    }
})(L10_OldMacDonaldsFarm_Heritage || (L10_OldMacDonaldsFarm_Heritage = {}));
//# sourceMappingURL=Main.js.map