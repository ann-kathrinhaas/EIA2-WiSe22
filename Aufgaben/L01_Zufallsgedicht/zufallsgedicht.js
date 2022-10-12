"use strict";
/*
Aufgabe: L01 Zufallsgedicht
Name: Ann-Kathrin Haas
Matrikel: 271111
Datum: 12.10.22
Quellen: -
*/
var Zufallsgedicht;
(function (Zufallsgedicht) {
    let subjekt = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikat = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekt = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(subjekt);
    //console.log(praedikat);
    //console.log(objekt);
    for (let i = subjekt.length; i >= 1; i--) {
        //console.log(i);
        console.log(getVerse(subjekt, praedikat, objekt));
    }
    function getVerse(_subjekt, _praedikat, _objekt) {
        let zufallsSubjekt = Math.floor(Math.random() * subjekt.length);
        let zufallsPraedikat = Math.floor(Math.random() * praedikat.length);
        let zufallsObjekt = Math.floor(Math.random() * objekt.length);
        //console.log(zufallsSubjekt);
        let verse = _subjekt[zufallsSubjekt] + " " + _praedikat[zufallsPraedikat] + " " + _objekt[zufallsObjekt];
        _subjekt.splice(zufallsSubjekt, 1);
        _praedikat.splice(zufallsPraedikat, 1);
        _objekt.splice(zufallsObjekt, 1);
        return verse;
    }
})(Zufallsgedicht || (Zufallsgedicht = {}));
//# sourceMappingURL=zufallsgedicht.js.map