/*
Aufgabe: L05 Einkaufsliste Client
Name: Ann-Kathrin Haas
Matrikel: 271111
Datum: 11.11.22
Quellen: -
*/

namespace L05_Einkaufsliste {

    window.addEventListener("load", handleLoad);

    async function handleLoad(): Promise<void> {
        console.log("Init");

        let response: Response = await fetch("https://ann-kathrinhaas.github.io/EIA2-WiSe22/Aufgaben/L05_Einkaufsliste_Client/data.json");
        let content: string = await response.text();
        let data: Data = JSON.parse(content);

        generateContent(data); // erstellt Beispieleinträge mit Inhalten aus data.json

        let addButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#addButton");
        addButton.addEventListener("click", addItem);


    }

    function addItem(): void {
        console.log("Add Item");

        let itemList: HTMLElement = <HTMLFormElement>document.querySelector("#itemList");
        let inputName: HTMLInputElement = <HTMLInputElement>document.querySelector("#newItem");
        let inputAmount: HTMLInputElement = <HTMLInputElement>document.querySelector("#newAmount");
        let inputComment: HTMLTextAreaElement = <HTMLTextAreaElement>document.querySelector("#newComment");

        // Div für Item Infos
        let itemDiv: HTMLDivElement = document.createElement("div");
        itemDiv.classList.add("itemInfo");
        itemList.appendChild(itemDiv);
        itemDiv.style.position = "relative";
        itemDiv.style.top = "20px";
        itemDiv.addEventListener("click", deleteItem);
        itemDiv.addEventListener("click", checkItem);

        // Checkbox
        let itemCheck: HTMLInputElement = document.createElement("input");
        itemCheck.setAttribute("type", "checkbox");
        itemCheck.classList.add("checkbox");
        itemDiv.appendChild(itemCheck);

        // Name
        let itemName: HTMLParagraphElement = <HTMLParagraphElement>document.createElement("p");
        itemName.classList.add("name");
        itemName.innerHTML = inputName.value;
        itemDiv.appendChild(itemName);
        inputName.value = "";

        // Amount
        let itemAmount: HTMLElement = document.createElement("p");
        itemAmount.classList.add("amount");
        itemAmount.innerHTML = inputAmount.value;
        itemName.appendChild(itemAmount);
        inputAmount.value = "";

        // Edit Button
        let editButton: HTMLButtonElement = document.createElement("button");
        editButton.classList.add("editButton");
        editButton.innerHTML = '<i class = "pen fas fa-pen"></i>';
        itemName.appendChild(editButton);
        editButton.style.position = "absolute";
        editButton.style.right = "-148px";
        editButton.style.top = "0px";

        // Delete Button
        let deleteButton: HTMLButtonElement = document.createElement("button");
        deleteButton.classList.add("deleteButton");
        deleteButton.innerHTML = '<i class = "trash fas fa-trash-alt"></i>';
        itemName.appendChild(deleteButton);
        deleteButton.style.position = "absolute";
        deleteButton.style.right = "-168px";
        deleteButton.style.top = "0px";

        // Date
        let itemDate: HTMLElement = document.createElement("p");
        itemDate.classList.add("date");
        itemDate.setAttribute("placeholder", "Date");
        itemDate.innerHTML = "Date";
        itemDiv.appendChild(itemDate);

        // Comment
        let itemComment: HTMLInputElement = document.createElement("input");
        itemComment.classList.add("comment");
        itemComment.setAttribute("placeholder", "Comment");
        itemComment.setAttribute("cols", "30");
        itemComment.setAttribute("rows", "1");
        itemComment.value = inputComment.value;
        itemDiv.appendChild(itemComment);
        inputComment.value = "";

        sendDataToServer();

    }

    export function checkItem(_event: MouseEvent): void {
        console.log("Check Item");

        let target: HTMLElement = <HTMLElement>_event.target;
        let currentTarget: HTMLElement = <HTMLElement>_event.currentTarget;

        if (target.classList.contains("checkbox")) {
            let date: Date = new Date();
            let day: number = date.getDate();
            let month: number = date.getMonth() + 1;
            let year: number = date.getFullYear();
            let checkDate: string = day + "." + month + "." + year;

            console.log("Check Date: " + checkDate);

            console.log(currentTarget);
            
            let dateField: Element = <Element>currentTarget.querySelector(".date");
            dateField.setAttribute("placeholder", checkDate);
            console.log(dateField);
            dateField.innerHTML = checkDate;
        }

        sendDataToServer();

    }

    export function deleteItem(_event: MouseEvent): void {
        console.log("Delete Item");

        let target: HTMLElement = <HTMLElement>_event.target;
        let currentTarget: HTMLElement = <HTMLElement>_event.currentTarget;
        let parentElement: HTMLElement = <HTMLElement>currentTarget.parentElement;

        if (target.classList.contains("deleteButton") || target.classList.contains("trash")) {
            parentElement.removeChild(currentTarget);
        }

        sendDataToServer();
        
    }

    async function sendDataToServer(): Promise<void> {
        console.log("Send To Server");

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://ann-kathrinhaas.github.io/EIA2-WiSe22/Aufgaben/L05_Einkaufsliste_Client/einkaufsliste.html";

        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch(url + "?" + query.toString());

        let response: Response = await fetch(url + "?" + query.toString());
        let responseText: string = await response.text();
        console.log("Response: " + response);
        console.log("Response Text: " + responseText);

        alert("Data Sent");
    }
}