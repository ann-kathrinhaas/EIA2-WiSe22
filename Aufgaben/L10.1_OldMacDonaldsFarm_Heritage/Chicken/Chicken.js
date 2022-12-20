"use strict";
var L10_OldMacDonaldsFarm_Heritage;
(function (L10_OldMacDonaldsFarm_Heritage) {
    class Chicken extends L10_OldMacDonaldsFarm_Heritage.Animal {
        constructor(_name, _specie, _food, _amount, _sound) {
            super(_name, _specie, _food, _amount, _sound);
        }
        doSpecialAction() {
            console.log("Special action chicken");
            L10_OldMacDonaldsFarm_Heritage.animalDiv.innerHTML += "and lays eggs <br><br>";
        }
    }
    L10_OldMacDonaldsFarm_Heritage.Chicken = Chicken;
})(L10_OldMacDonaldsFarm_Heritage || (L10_OldMacDonaldsFarm_Heritage = {}));
//# sourceMappingURL=Chicken.js.map