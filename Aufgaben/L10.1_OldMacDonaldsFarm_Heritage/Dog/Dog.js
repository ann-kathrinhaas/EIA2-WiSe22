"use strict";
var L10_OldMacDonaldsFarm_Heritage;
(function (L10_OldMacDonaldsFarm_Heritage) {
    class Dog extends L10_OldMacDonaldsFarm_Heritage.Animal {
        constructor(_name, _specie, _food, _amount, _sound) {
            super(_name, _specie, _food, _amount, _sound);
        }
        doSpecialAction() {
            console.log("Special action dog");
            L10_OldMacDonaldsFarm_Heritage.animalDiv.innerHTML += "and tends the sheep <br><br>";
        }
    }
    L10_OldMacDonaldsFarm_Heritage.Dog = Dog;
})(L10_OldMacDonaldsFarm_Heritage || (L10_OldMacDonaldsFarm_Heritage = {}));
//# sourceMappingURL=Dog.js.map