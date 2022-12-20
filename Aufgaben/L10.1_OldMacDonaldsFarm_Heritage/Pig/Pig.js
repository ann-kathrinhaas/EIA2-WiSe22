"use strict";
var L10_OldMacDonaldsFarm_Heritage;
(function (L10_OldMacDonaldsFarm_Heritage) {
    class Pig extends L10_OldMacDonaldsFarm_Heritage.Animal {
        constructor(_name, _specie, _food, _amount, _sound) {
            super(_name, _specie, _food, _amount, _sound);
        }
        doSpecialAction() {
            console.log("Special action pig");
            L10_OldMacDonaldsFarm_Heritage.animalDiv.innerHTML += "and rolls in the mud <br><br>";
        }
    }
    L10_OldMacDonaldsFarm_Heritage.Pig = Pig;
})(L10_OldMacDonaldsFarm_Heritage || (L10_OldMacDonaldsFarm_Heritage = {}));
//# sourceMappingURL=Pig.js.map