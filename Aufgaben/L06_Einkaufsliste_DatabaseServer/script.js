"use strict";
/*
Aufgabe: L06 Einkaufsliste Databse Server
Name: Ann-Kathrin Haas
Matrikel: 271111
Datum: 19.11.22
Quellen: -
*/
var L06_Einkaufsliste;
(function (L06_Einkaufsliste) {
    window.addEventListener("load", handleLoad);
    let url = "https://webuser.hs-furtwangen.de/~haasannk/Database/";
    async function handleLoad() {
        console.log("Init");
        let query = new URLSearchParams();
        query.set("command", "show");
        query.set("collection", "ShoppingList");
        console.log("Query: " + query.toString());
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        console.log("Response Text: " + responseText);
        let data = JSON.parse(responseText);
        //let content: string = await response.text();
        //let data: Data = JSON.parse(content);
        console.log("Response: " + response);
        //console.log("Content: " + content);
        console.log("Data: " + data);
        // tslint:disable-next-line: quotemark
        if (responseText == '{"status":"success","data":["ShoppingList"]}') { // Erfolgsbestätigung von MingiDB -> Collection ShoppingList existiert
            console.log("Collection ShoppingList Exists");
            L06_Einkaufsliste.generateContent(data);
        }
        else { // Collection ShoppingList erstellen
            let query = new URLSearchParams();
            query.set("command", "create");
            query.set("collection", "ShoppingList");
            let response = await fetch(url + "?" + query.toString());
            let responseText = await response.text();
            console.log("Response Text: " + responseText);
        }
        let addButton = document.querySelector("#addButton");
        addButton.addEventListener("click", addItem);
    }
    function addItem() {
        console.log("Add Item");
        let itemList = document.querySelector("#itemList");
        let inputName = document.querySelector("#newItem");
        let inputAmount = document.querySelector("#newAmount");
        let inputComment = document.querySelector("#newComment");
        // Div für Item Infos
        let itemDiv = document.createElement("div");
        itemDiv.classList.add("itemInfo");
        itemList.appendChild(itemDiv);
        itemDiv.style.position = "relative";
        itemDiv.style.top = "20px";
        itemDiv.addEventListener("click", deleteItem);
        itemDiv.addEventListener("click", checkItem);
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
        // tslint:disable-next-line: quotemark
        editButton.innerHTML = '<i class = "pen fas fa-pen"></i>';
        itemName.appendChild(editButton);
        editButton.style.position = "absolute";
        editButton.style.right = "-148px";
        editButton.style.top = "0px";
        // Delete Button
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteButton");
        // tslint:disable-next-line: quotemark
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
        sendDataToServer();
    }
    L06_Einkaufsliste.addItem = addItem;
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
        sendDataToServer();
    }
    L06_Einkaufsliste.checkItem = checkItem;
    async function deleteItem(_event) {
        console.log("Delete Item");
        let query = new URLSearchParams();
        query.set("command", "delete");
        query.set("collection", "ShoppingList");
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        console.log(responseText);
        let target = _event.target;
        let currentTarget = _event.currentTarget;
        let parentElement = currentTarget.parentElement;
        if (target.classList.contains("deleteButton") || target.classList.contains("trash")) {
            parentElement.removeChild(currentTarget);
        }
        sendDataToServer();
    }
    L06_Einkaufsliste.deleteItem = deleteItem;
    async function sendDataToServer() {
        console.log("Send Data To Server");
        let query = new URLSearchParams;
        query.set("command", "insert");
        query.set("collection", "ShoppingList");
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        console.log("Response Text: " + responseText);
        alert("Data Sent");
    }
})(L06_Einkaufsliste || (L06_Einkaufsliste = {}));
//# sourceMappingURL=script.js.map