"use strict";
var L10_OldMacDonaldsFarm_Heritage;
(function (L10_OldMacDonaldsFarm_Heritage) {
    class Cat extends L10_OldMacDonaldsFarm_Heritage.Animal {
        constructor(_name, _specie, _food, _amount, _sound) {
            super(_name, _specie, _food, _amount, _sound);
        }
        doSpecialAction() {
            console.log("Special action cat");
            L10_OldMacDonaldsFarm_Heritage.animalDiv.innerHTML += "and hunts mice <br><br>";
        }
    }
    L10_OldMacDonaldsFarm_Heritage.Cat = Cat;
})(L10_OldMacDonaldsFarm_Heritage || (L10_OldMacDonaldsFarm_Heritage = {}));
//# sourceMappingURL=Cat.js.map