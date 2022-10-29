/*
Aufgabe: L03 Einkaufsliste
Name: Ann-Kathrin Haas
Matrikel: 271111
Datum: 29.10.22
Quellen: -
*/

namespace L03_Einkaufsliste {
    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        let addButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#addButton");
        let checkBoxes: NodeListOf<HTMLInputElement> = document.querySelectorAll("input[type='checkbox']");
        let deleteButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll(".deleteButton");

        
        addButton.addEventListener("click", addItem);

        checkBoxes.forEach(checkBox => {
            checkBox.addEventListener("click", checkItem);
        });

        deleteButtons.forEach(deleteButton => {
            deleteButton.addEventListener("click", deleteItem);
        });
    

        function addItem(): void {
            console.log("add item");
        }

        function checkItem(): void {
            console.log("check item");
        }

        function deleteItem(): void {
            console.log("delete item"); 
        }

    }
}