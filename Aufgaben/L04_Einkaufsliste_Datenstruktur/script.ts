/*
Aufgabe: L04 Einkaufsliste Datenstruktur
Name: Ann-Kathrin Haas
Matrikel: 271111
Datum: 05.11.22
Quellen: -
*/

namespace L04_Einkaufsliste {
    
    window.addEventListener("load", handleLoad);
    

    function handleLoad(): void {
        console.log ("Init");

        generateContent(data); // erstellt Beispieleinträge mit Inhalten aus DataStructure

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
    }
    
    

    function createNewItem(): void {
        console.log("Create New Item");

        let name: HTMLLabelElement;
        let amount: number;
        let comment: string;
        let date: string;
        let check: boolean;
        
        let fsItemList: HTMLElement = <HTMLFieldSetElement>document.querySelector("#fsItemList");
/*
        let inputName: HTMLInputElement = document.querySelector("label");
        let inputAmount: HTMLInputElement = document.querySelector(".amount");
        let inputComment: HTMLTextAreaElement = document.querySelector(".comment");*/

        let createItemDiv: HTMLDivElement = document.createElement("div");
        createItemDiv.classList.add("itemInfo");
        fsItemList.appendChild(createItemDiv);

        let createItemCheck: HTMLInputElement = document.createElement("input");
        createItemCheck.setAttribute("type", "checkbox");
        fsItemList.appendChild(createItemCheck);

        let createItemName: HTMLLabelElement = document.createElement("label");
        createItemName.innerHTML = ;
        fsItemList.appendChild(createItemName);

        let createItemAmount: HTMLElement = document.createElement("p"); 
        createItemAmount.classList.add("amount");
        //createItemAmount.innerHTML = (newAmount as string);
        fsItemList.appendChild(createItemAmount);

        let createItemDeleteButton: HTMLButtonElement = document.createElement("button");
        createItemDeleteButton.classList.add("deleteButton");
        createItemDeleteButton.innerHTML = '<i class = "trash fas fa-trash-alt"></i>';
        createItemDiv.appendChild(createItemDeleteButton);

        let createItemDate: HTMLInputElement = document.createElement("input");
        createItemDate.classList.add("date");
        createItemDate.setAttribute("placeholder", "Date");
        //createItemDate.value = ;
        fsItemList.appendChild(createItemDate);

        let createItemComment: HTMLInputElement = document.createElement("input");
        createItemComment.classList.add("comment");
        createItemComment.setAttribute("placeholder", "Comment");
        createItemComment.setAttribute("cols", "30");
        createItemComment.setAttribute("rows", "1");
        //createItemComment.value = ();
        fsItemList.appendChild(createItemComment);

    }

    function addItem(_event: MouseEvent): void {
        console.log("Add Item");

        createNewItem();
    }

    
    function checkItem (_event: MouseEvent): void {
        console.log("Check Item");
    }
    
    function deleteItem (_event: MouseEvent): void {
        console.log("Delete Item");
    }
}