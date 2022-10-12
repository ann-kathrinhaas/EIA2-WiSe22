/*
Aufgabe: L01 Zufallsgedicht
Name: Ann-Kathrin Haas
Matrikel: 271111
Datum: 12.10.22
Quellen: -
*/

namespace Zufallsgedicht {

    let subjekt: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikat: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekt: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

    //console.log(subjekt);
    //console.log(praedikat);
    //console.log(objekt);

    for (let i: number = subjekt.length; i >= 1; i--) {
        //console.log(i);
        console.log(getVerse(subjekt, praedikat, objekt));
    }

    function getVerse(_subjekt: string[], _praedikat: string[], _objekt: string[]): string {

        let zufallsSubjekt: number = Math.floor(Math.random() * subjekt.length);
        let zufallsPraedikat: number = Math.floor(Math.random() * praedikat.length);
        let zufallsObjekt: number = Math.floor(Math.random() * objekt.length);

        //console.log(zufallsSubjekt);
        
        let verse: string = _subjekt[zufallsSubjekt] + " " + _praedikat[zufallsPraedikat] + " " + _objekt[zufallsObjekt];

        _subjekt.splice(zufallsSubjekt, 1);
        _praedikat.splice(zufallsPraedikat, 1);
        _objekt.splice(zufallsObjekt, 1);

        return verse;
    }
    
}