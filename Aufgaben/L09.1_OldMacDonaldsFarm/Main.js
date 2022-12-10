"use strict";
/*
Aufgabe: L09.1 Old MacDonals Farm
Name: Ann-Kathrin Haas
Matrikel: 271111
Datum: 10.12.22
Quellen: -
*/
var L09_OldMacDonaldsFarm;
(function (L09_OldMacDonaldsFarm) {
    window.addEventListener("load", handleLoad);
    let food = [
        new L09_OldMacDonaldsFarm.Food("grass", 50),
        new L09_OldMacDonaldsFarm.Food("meat", 80),
        new L09_OldMacDonaldsFarm.Food("fish", 15),
        new L09_OldMacDonaldsFarm.Food("junk", 60),
        new L09_OldMacDonaldsFarm.Food("hay", 40),
        new L09_OldMacDonaldsFarm.Food("grains", 20)
    ];
    let animals = [
        new L09_OldMacDonaldsFarm.Animal("Milka", "cow", food[0], 10, "moo"),
        new L09_OldMacDonaldsFarm.Animal("Lassie", "dog", food[1], 5, "woo"),
        new L09_OldMacDonaldsFarm.Animal("Garfield", "cat", food[2], 3, "miau"),
        new L09_OldMacDonaldsFarm.Animal("Rudi", "pig", food[3], 16, "oink"),
        new L09_OldMacDonaldsFarm.Animal("Spirit", "horse", food[4], 12, "hüh"),
        new L09_OldMacDonaldsFarm.Animal("Trudhilde", "chicken", food[5], 2, "cock-a-doodle-do")
    ];
    function handleLoad() {
        console.log("Old MacDonalds Farm");
        L09_OldMacDonaldsFarm.animalDiv = document.querySelector("#animals");
        L09_OldMacDonaldsFarm.foodDiv = document.querySelector("#food");
        for (let animal of animals) {
            animal.sing();
            animal.eat();
        }
        L09_OldMacDonaldsFarm.foodDiv.innerHTML = "";
        for (let foodItem of food) {
            L09_OldMacDonaldsFarm.foodDiv.innerHTML += foodItem.type + ": " + foodItem.amount + " kg <br>";
        }
    }
})(L09_OldMacDonaldsFarm || (L09_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Main.js.map