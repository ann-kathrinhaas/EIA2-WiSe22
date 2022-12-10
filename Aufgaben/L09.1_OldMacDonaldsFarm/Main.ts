/*
Aufgabe: L09.1 Old MacDonals Farm
Name: Ann-Kathrin Haas
Matrikel: 271111
Datum: 10.12.22
Quellen: -
*/

namespace L09_OldMacDonaldsFarm {

    window.addEventListener("load", handleLoad);

    export let animalDiv: HTMLDivElement;
    export let foodDiv: HTMLDivElement;

    let food: Food[] = [
        new Food("grass", 50),
        new Food("meat", 80),
        new Food("fish", 15),
        new Food("junk", 60),
        new Food("hay", 40),
        new Food("grains", 20)
    ];

    let animals: Animal[] = [
        new Animal("Milka", "cow", food[0], 10, "moo"), 
        new Animal("Lassie", "dog", food[1], 5, "woo"), 
        new Animal("Garfield", "cat", food[2], 3, "miau"), 
        new Animal("Rudi", "pig", food[3], 16, "oink"), 
        new Animal("Spirit", "horse", food[4], 12, "hüh"),
        new Animal("Trudhilde", "chicken", food[5], 2, "cock-a-doodle-do")
    ];

    function handleLoad(): void {
        console.log("Old MacDonalds Farm");

        animalDiv = <HTMLDivElement>document.querySelector("#animals");
        foodDiv = <HTMLDivElement>document.querySelector("#food");

        for (let animal of animals) {
            animal.sing();
            animal.eat();
        }

        foodDiv.innerHTML = "";

        for (let foodItem of food) {
            foodDiv.innerHTML += foodItem.type + ": " + foodItem.amount + " kg <br>";
        }
    }
}