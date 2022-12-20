/*
Aufgabe: L10.1 Old MacDonals Farm Heritage
Name: Ann-Kathrin Haas
Matrikel: 271111
Datum: 20.12.22
Quellen: -
*/

namespace L10_OldMacDonaldsFarm_Heritage {

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

    let animals: Animal[] = [];

    animals.push(new Cow("Milka", "cow", food[0], 10, "moo"));
    animals.push(new Dog("Lassie", "dog", food[1], 5, "woo"));
    animals.push(new Cat("Garfield", "cat", food[2], 3, "miau"));
    animals.push(new Pig("Rudi", "pig", food[3], 16, "oink"));
    animals.push(new Pig("Peppa", "pig", food[3], 26, "oink oink"));
    animals.push(new Horse("Spirit", "horse", food[4], 12, "hüh"));
    animals.push(new Chicken("Trudhilde", "chicken", food[5], 2, "cock-a-doodle-do"));

    function handleLoad(): void {
        console.log("Old MacDonalds Farm");

        animalDiv = <HTMLDivElement>document.querySelector("#animals");
        foodDiv = <HTMLDivElement>document.querySelector("#food");

        for (let animal of animals) {
            animal.sing();
            animal.eat();
            animal.doSpecialAction();
        }

        foodDiv.innerHTML = "";

        for (let foodItem of food) {
            foodDiv.innerHTML += foodItem.type + ": " + foodItem.amount + " kg <br>";
        }
    }
}