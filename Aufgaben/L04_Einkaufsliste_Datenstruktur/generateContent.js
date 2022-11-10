"use strict";
var L04_Einkaufsliste;
(function (L04_Einkaufsliste) {
    function generateContent(_data) {
        let fsItemList = document.querySelector("#fsItemList");
        console.log("Entry");
        for (let i = 0; i < _data.Entry.length; i++) {
            // Div für Item Infos
            let itemDiv = document.createElement("div");
            itemDiv.classList.add("itemInfo");
            fsItemList.appendChild(itemDiv);
            itemDiv.addEventListener("click", L04_Einkaufsliste.deleteItem);
            itemDiv.addEventListener("click", L04_Einkaufsliste.checkItem);
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
            editButton.innerHTML = '<i class = "pen fas fa-pen"></i>';
            itemDiv.appendChild(editButton);
            // Delete Button
            let deleteButton = document.createElement("button");
            deleteButton.classList.add("deleteButton");
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
    L04_Einkaufsliste.generateContent = generateContent;
})(L04_Einkaufsliste || (L04_Einkaufsliste = {}));
//# sourceMappingURL=generateContent.js.map