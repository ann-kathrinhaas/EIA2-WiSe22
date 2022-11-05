"use strict";
var L04_Einkaufsliste;
(function (L04_Einkaufsliste) {
    function generateContent(_data) {
        let fsItemList = document.querySelector("#fsItemList");
        console.log("Entry");
        for (let i = 0; i < _data.Entry.length; i++) {
            // Div für Item Infos
            let createItemDiv = document.createElement("div");
            createItemDiv.classList.add("itemInfo");
            fsItemList.appendChild(createItemDiv);
            // Checkbox
            let createItemCheck = document.createElement("input");
            createItemCheck.setAttribute("type", "checkbox");
            //createItemCheck.value = _data.Entry[i].checked;
            fsItemList.appendChild(createItemCheck);
            // Name
            let createItemName = document.createElement("label");
            createItemName.innerHTML = _data.Entry[i].name;
            fsItemList.appendChild(createItemName);
            // Amount
            let createItemAmount = document.createElement("p");
            createItemAmount.classList.add("amount");
            createItemAmount.innerHTML = _data.Entry[i].amount.toString();
            fsItemList.appendChild(createItemAmount);
            // Delete Button
            let createItemDeleteButton = document.createElement("button");
            createItemDeleteButton.classList.add("deleteButton");
            createItemDeleteButton.innerHTML = '<i class = "trash fas fa-trash-alt"></i>';
            createItemDiv.appendChild(createItemDeleteButton);
            // Date
            let createItemDate = document.createElement("input");
            createItemDate.classList.add("date");
            createItemDate.setAttribute("placeholder", "Date");
            createItemDate.value = _data.Entry[i].date;
            fsItemList.appendChild(createItemDate);
            // Comment
            let createItemComment = document.createElement("input");
            createItemComment.classList.add("comment");
            createItemComment.setAttribute("placeholder", "Comment");
            createItemComment.setAttribute("cols", "30");
            createItemComment.setAttribute("rows", "1");
            createItemComment.value = _data.Entry[i].comment;
            fsItemList.appendChild(createItemComment);
        }
    }
    L04_Einkaufsliste.generateContent = generateContent;
})(L04_Einkaufsliste || (L04_Einkaufsliste = {}));
//# sourceMappingURL=generateContent.js.map