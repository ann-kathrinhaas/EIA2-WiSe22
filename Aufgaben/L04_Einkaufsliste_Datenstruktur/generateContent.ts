namespace L04_Einkaufsliste {

    export function generateContent(_data: Data): void {

        let fsItemList: HTMLElement = <HTMLFieldSetElement>document.querySelector("#fsItemList");
        
        console.log("Entry");

        for (let i: number = 0; i < _data.Entry.length; i++) {
            
            // Div für Item Infos
            let createItemDiv: HTMLDivElement = document.createElement("div");
            createItemDiv.classList.add("itemInfo");
            fsItemList.appendChild(createItemDiv);

            // Checkbox
            let createItemCheck: HTMLInputElement = document.createElement("input");
            createItemCheck.setAttribute("type", "checkbox");
            //createItemCheck.value = _data.Entry[i].checked;
            fsItemList.appendChild(createItemCheck);

            // Name
            let createItemName: HTMLLabelElement = document.createElement("label");
            createItemName.innerHTML = _data.Entry[i].name;
            fsItemList.appendChild(createItemName);

            // Amount
            let createItemAmount: HTMLElement = document.createElement("p");
            createItemAmount.classList.add("amount");
            createItemAmount.innerHTML = _data.Entry[i].amount.toString();
            fsItemList.appendChild(createItemAmount);

            // Delete Button
            let createItemDeleteButton: HTMLButtonElement = document.createElement("button");
            createItemDeleteButton.classList.add("deleteButton");
            createItemDeleteButton.innerHTML = '<i class = "trash fas fa-trash-alt"></i>';
            createItemDiv.appendChild(createItemDeleteButton);

            // Date
            let createItemDate: HTMLInputElement = document.createElement("input");
            createItemDate.classList.add("date");
            createItemDate.setAttribute("placeholder", "Date");
            createItemDate.value = _data.Entry[i].date;
            fsItemList.appendChild(createItemDate);

            // Comment
            let createItemComment: HTMLInputElement = document.createElement("input");
            createItemComment.classList.add("comment");
            createItemComment.setAttribute("placeholder", "Comment");
            createItemComment.setAttribute("cols", "30");
            createItemComment.setAttribute("rows", "1");
            createItemComment.value = _data.Entry[i].comment;
            fsItemList.appendChild(createItemComment);
           
        }
    }


    
    

}