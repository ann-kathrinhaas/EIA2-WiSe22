"use strict";
var L10_OldMacDonaldsFarm_Heritage;
(function (L10_OldMacDonaldsFarm_Heritage) {
    class Cow extends L10_OldMacDonaldsFarm_Heritage.Animal {
        constructor(_name, _specie, _food, _amount, _sound) {
            super(_name, _specie, _food, _amount, _sound);
        }
        doSpecialAction() {
            console.log("Special action cow");
            L10_OldMacDonaldsFarm_Heritage.animalDiv.innerHTML += "and produces milk <br><br>";
        }
    }
    L10_OldMacDonaldsFarm_Heritage.Cow = Cow;
})(L10_OldMacDonaldsFarm_Heritage || (L10_OldMacDonaldsFarm_Heritage = {}));
//# sourceMappingURL=Cow.js.map