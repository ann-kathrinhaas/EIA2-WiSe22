"use strict";
var L10_OldMacDonaldsFarm_Heritage;
(function (L10_OldMacDonaldsFarm_Heritage) {
    class Horse extends L10_OldMacDonaldsFarm_Heritage.Animal {
        constructor(_name, _specie, _food, _amount, _sound) {
            super(_name, _specie, _food, _amount, _sound);
        }
        doSpecialAction() {
            console.log("Special action horse");
            L10_OldMacDonaldsFarm_Heritage.animalDiv.innerHTML += "and has a foal<br><br>";
        }
    }
    L10_OldMacDonaldsFarm_Heritage.Horse = Horse;
})(L10_OldMacDonaldsFarm_Heritage || (L10_OldMacDonaldsFarm_Heritage = {}));
//# sourceMappingURL=Horse.js.map