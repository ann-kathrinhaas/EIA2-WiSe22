"use strict";
/*
Aufgabe: L03 Einkaufsliste
Name: Ann-Kathrin Haas
Matrikel: 271111
Datum: 29.10.22
Quellen: -
*/
var L03_Einkaufsliste;
(function (L03_Einkaufsliste) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let addButton = document.querySelector("#addButton");
        let checkBoxes = document.querySelectorAll("input[type='checkbox']");
        let deleteButtons = document.querySelectorAll(".deleteButton");
        addButton.addEventListener("click", addItem);
        checkBoxes.forEach(checkBox => {
            checkBox.addEventListener("click", checkItem);
        });
        deleteButtons.forEach(deleteButton => {
            deleteButton.addEventListener("click", deleteItem);
        });
        function addItem() {
            console.log("add item");
        }
        function checkItem() {
            console.log("check item");
        }
        function deleteItem() {
            console.log("delete item");
        }
    }
})(L03_Einkaufsliste || (L03_Einkaufsliste = {}));
//# sourceMappingURL=script.js.map