"use strict";
var L06_Einkaufsliste;
(function (L06_Einkaufsliste) {
    let url = "https://webuser.hs-furtwangen.de/~haasannk/Database/";
    let entries;
    async function generateContent(_data) {
        let itemList = document.querySelector("#itemList");
        console.log("Entry");
        let query = new URLSearchParams();
        query.set("command", "find");
        query.set("collection", "ShoppingList");
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        console.log("Response Text: " + responseText);
        entries = [];
        for (let i = 0; i < entries.length; i++) {
            // Div für Item Infos
            let itemDiv = document.createElement("div");
            itemDiv.classList.add("itemInfo");
            itemList.appendChild(itemDiv);
            itemDiv.addEventListener("click", L06_Einkaufsliste.deleteItem);
            itemDiv.addEventListener("click", L06_Einkaufsliste.checkItem);
            // Checkbox
            let itemCheck = document.createElement("input");
            itemCheck.setAttribute("type", "checkbox");
            itemCheck.classList.add("checkbox");
            itemCheck.checked = _data.Entry[i].checked;
            itemDiv.appendChild(itemCheck);
            // Name
            let itemName = document.createElement("label");
            itemName.classList.add("name");
            itemName.innerHTML = _data.Entry[i].name;
            itemDiv.appendChild(itemName);
            // Amount
            let itemAmount = document.createElement("p");
            itemAmount.classList.add("amount");
            itemAmount.innerHTML = _data.Entry[i].amount.toString();
            itemDiv.appendChild(itemAmount);
            // Edit Button
            let editButton = document.createElement("button");
            editButton.classList.add("editButton");
            // tslint:disable-next-line: quotemark
            editButton.innerHTML = '<i class = "pen fas fa-pen"></i>';
            itemDiv.appendChild(editButton);
            // Delete Button
            let deleteButton = document.createElement("button");
            deleteButton.classList.add("deleteButton");
            // tslint:disable-next-line: quotemark
            deleteButton.innerHTML = '<i class = "trash fas fa-trash-alt"></i>';
            itemDiv.appendChild(deleteButton);
            // Date
            let itemDate = document.createElement("input");
            itemDate.classList.add("date");
            itemDate.setAttribute("placeholder", "Date");
            itemDate.value = _data.Entry[i].date;
            itemDiv.appendChild(itemDate);
            // Comment
            let itemComment = document.createElement("input");
            itemComment.classList.add("comment");
            itemComment.setAttribute("placeholder", "Comment");
            itemComment.setAttribute("cols", "30");
            itemComment.setAttribute("rows", "1");
            itemComment.value = _data.Entry[i].comment;
            itemDiv.appendChild(itemComment);
        }
    }
    L06_Einkaufsliste.generateContent = generateContent;
})(L06_Einkaufsliste || (L06_Einkaufsliste = {}));
//# sourceMappingURL=generateContent.js.map