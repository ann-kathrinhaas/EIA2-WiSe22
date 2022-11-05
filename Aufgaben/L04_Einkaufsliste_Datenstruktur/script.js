"use strict";
/*
Aufgabe: L04 Einkaufsliste Datenstruktur
Name: Ann-Kathrin Haas
Matrikel: 271111
Datum: 05.11.22
Quellen: -
*/
var L04_Einkaufsliste;
(function (L04_Einkaufsliste) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        console.log("Init");
        L04_Einkaufsliste.generateContent(L04_Einkaufsliste.data); // erstellt Beispieleinträge mit Inhalten aus DataStructure
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
    }
    function createNewItem() {
        console.log("Create New Item");
        let name;
        let amount;
        let comment;
        let date;
        let check;
        let fsItemList = document.querySelector("#fsItemList");
        /*
                let inputName: HTMLInputElement = document.querySelector("label");
                let inputAmount: HTMLInputElement = document.querySelector(".amount");
                let inputComment: HTMLTextAreaElement = document.querySelector(".comment");*/
        let createItemDiv = document.createElement("div");
        createItemDiv.classList.add("itemInfo");
        fsItemList.appendChild(createItemDiv);
        let createItemCheck = document.createElement("input");
        createItemCheck.setAttribute("type", "checkbox");
        fsItemList.appendChild(createItemCheck);
        let createItemName = document.createElement("label");
        createItemName.innerHTML = ;
        fsItemList.appendChild(createItemName);
        let createItemAmount = document.createElement("p");
        createItemAmount.classList.add("amount");
        //createItemAmount.innerHTML = (newAmount as string);
        fsItemList.appendChild(createItemAmount);
        let createItemDeleteButton = document.createElement("button");
        createItemDeleteButton.classList.add("deleteButton");
        createItemDeleteButton.innerHTML = '<i class = "trash fas fa-trash-alt"></i>';
        createItemDiv.appendChild(createItemDeleteButton);
        let createItemDate = document.createElement("input");
        createItemDate.classList.add("date");
        createItemDate.setAttribute("placeholder", "Date");
        //createItemDate.value = ;
        fsItemList.appendChild(createItemDate);
        let createItemComment = document.createElement("input");
        createItemComment.classList.add("comment");
        createItemComment.setAttribute("placeholder", "Comment");
        createItemComment.setAttribute("cols", "30");
        createItemComment.setAttribute("rows", "1");
        //createItemComment.value = ();
        fsItemList.appendChild(createItemComment);
    }
    function addItem(_event) {
        console.log("Add Item");
        createNewItem();
    }
    function checkItem(_event) {
        console.log("Check Item");
    }
    function deleteItem(_event) {
        console.log("Delete Item");
    }
})(L04_Einkaufsliste || (L04_Einkaufsliste = {}));
//# sourceMappingURL=script.js.map