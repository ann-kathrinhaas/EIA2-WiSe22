"use strict";
/*
Aufgabe: L05 Einkaufsliste Client
Name: Ann-Kathrin Haas
Matrikel: 271111
Datum: 11.11.22
Quellen: -
*/
var L05_Einkaufsliste;
(function (L05_Einkaufsliste) {
    window.addEventListener("load", handleLoad);
    async function handleLoad() {
        console.log("Init");
        let response = await fetch("data.json");
        let content = await response.text();
        let data = JSON.parse(content);
        L05_Einkaufsliste.generateContent(data); // erstellt Beispieleinträge mit Inhalten aus DataStructure
        let addButton = document.querySelector("#addButton");
        addButton.addEventListener("click", addItem);
    }
    function addItem() {
        console.log("Add Item");
        let fsItemList = document.querySelector("#fsItemList");
        let inputName = document.querySelector("#newItem");
        let inputAmount = document.querySelector("#newAmount");
        let inputComment = document.querySelector("#newComment");
        // Div für Item Infos
        let itemDiv = document.createElement("div");
        itemDiv.classList.add("itemInfo");
        fsItemList.appendChild(itemDiv);
        itemDiv.style.position = "relative";
        itemDiv.style.top = "20px";
        itemDiv.addEventListener("click", deleteItem);
        itemDiv.addEventListener("click", checkItem);
        //itemDiv.addEventListener("click", editItem);
        // Checkbox
        let itemCheck = document.createElement("input");
        itemCheck.setAttribute("type", "checkbox");
        itemCheck.classList.add("checkbox");
        itemDiv.appendChild(itemCheck);
        // Name
        let itemName = document.createElement("p");
        itemName.classList.add("name");
        itemName.innerHTML = inputName.value;
        itemDiv.appendChild(itemName);
        inputName.value = "";
        // Amount
        let itemAmount = document.createElement("p");
        itemAmount.classList.add("amount");
        itemAmount.innerHTML = inputAmount.value;
        itemName.appendChild(itemAmount);
        inputAmount.value = "";
        // Edit Button
        let editButton = document.createElement("button");
        editButton.classList.add("editButton");
        editButton.innerHTML = '<i class = "pen fas fa-pen"></i>';
        itemName.appendChild(editButton);
        editButton.style.position = "absolute";
        editButton.style.right = "-148px";
        editButton.style.top = "0px";
        // Delete Button
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteButton");
        deleteButton.innerHTML = '<i class = "trash fas fa-trash-alt"></i>';
        itemName.appendChild(deleteButton);
        deleteButton.style.position = "absolute";
        deleteButton.style.right = "-168px";
        deleteButton.style.top = "0px";
        // Date
        let itemDate = document.createElement("p");
        itemDate.classList.add("date");
        itemDate.setAttribute("placeholder", "Date");
        itemDate.innerHTML = "Date";
        itemDiv.appendChild(itemDate);
        // Comment
        let itemComment = document.createElement("input");
        itemComment.classList.add("comment");
        itemComment.setAttribute("placeholder", "Comment");
        itemComment.setAttribute("cols", "30");
        itemComment.setAttribute("rows", "1");
        itemComment.value = inputComment.value;
        itemDiv.appendChild(itemComment);
        inputComment.value = "";
    }
    function checkItem(_event) {
        console.log("Check Item");
        let target = _event.target;
        let currentTarget = _event.currentTarget;
        if (target.classList.contains("checkbox")) {
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let checkDate = day + "." + month + "." + year;
            console.log("Check Date: " + checkDate);
            console.log(currentTarget);
            let dateField = currentTarget.querySelector(".date");
            dateField.setAttribute("placeholder", checkDate);
            console.log(dateField);
            dateField.innerHTML = checkDate;
        }
    }
    L05_Einkaufsliste.checkItem = checkItem;
    function deleteItem(_event) {
        console.log("Delete Item");
        let target = _event.target;
        let currentTarget = _event.currentTarget;
        let parentElement = currentTarget.parentElement;
        if (target.classList.contains("deleteButton") || target.classList.contains("trash")) {
            parentElement.removeChild(currentTarget);
        }
    }
    L05_Einkaufsliste.deleteItem = deleteItem;
    /*
        export function editItem(_event: MouseEvent): void {
            console.log("Edit Item");
    
            let target: HTMLElement = <HTMLElement>_event.target;
            let currentTarget: HTMLElement = <HTMLElement>_event.currentTarget;
    
            if (target.classList.contains("editButton") || target.classList.contains("pen")) {
                
                let inputName: HTMLInputElement = <HTMLInputElement>document.querySelector("#newItem");
                let inputAmount: HTMLInputElement = <HTMLInputElement>document.querySelector("#newAmount");
                let inputComment: HTMLTextAreaElement = <HTMLTextAreaElement>document.querySelector("#newComment");
    
                //let nameField: Element = <Element>currentTarget.querySelector(".name");
                let itemName: HTMLParagraphElement = <HTMLParagraphElement>target.querySelector("p");
                itemName.innerHTML = inputName.value;
    
    
            }
        }*/
})(L05_Einkaufsliste || (L05_Einkaufsliste = {}));
//# sourceMappingURL=script.js.map