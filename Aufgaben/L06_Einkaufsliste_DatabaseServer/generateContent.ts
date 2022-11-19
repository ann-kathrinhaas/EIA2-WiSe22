namespace L06_Einkaufsliste {

    let url: string = "https://webuser.hs-furtwangen.de/~haasannk/Database/";

    export interface Item {
        name: string;
        amount: number;
        comment: string;
        date: string;
        checked: boolean;
    }

    export interface Data {
        [entry: string]: Item[];
    }

    let entries: Item[];


    export async function generateContent(_data: Data): Promise<void> {

        let itemList: HTMLElement = <HTMLFormElement>document.querySelector("#itemList");
        
        console.log("Entry");

        let query: URLSearchParams = new URLSearchParams();
        query.set("command", "find");
        query.set("collection", "ShoppingList");

        let response: Response = await fetch(url + "?" + query.toString());
        let responseText: string = await response.text();
        console.log("Response Text: " + responseText);

        entries = [];


        for (let i: number = 0; i < entries.length; i++) {
            
            // Div für Item Infos
            let itemDiv: HTMLDivElement = document.createElement("div");
            itemDiv.classList.add("itemInfo");
            itemList.appendChild(itemDiv);
            itemDiv.addEventListener("click", deleteItem);
            itemDiv.addEventListener("click", checkItem);

            // Checkbox
            let itemCheck: HTMLInputElement = document.createElement("input");
            itemCheck.setAttribute("type", "checkbox");
            itemCheck.classList.add("checkbox");
            itemCheck.checked = _data.Entry[i].checked;
            itemDiv.appendChild(itemCheck);

            // Name
            let itemName: HTMLLabelElement = document.createElement("label");
            itemName.classList.add("name");
            itemName.innerHTML = _data.Entry[i].name;
            itemDiv.appendChild(itemName);

            // Amount
            let itemAmount: HTMLElement = document.createElement("p");
            itemAmount.classList.add("amount");
            itemAmount.innerHTML = _data.Entry[i].amount.toString();
            itemDiv.appendChild(itemAmount);

            // Edit Button
            let editButton: HTMLButtonElement = document.createElement("button");
            editButton.classList.add("editButton");
            // tslint:disable-next-line: quotemark
            editButton.innerHTML = '<i class = "pen fas fa-pen"></i>';
            itemDiv.appendChild(editButton);

            // Delete Button
            let deleteButton: HTMLButtonElement = document.createElement("button");
            deleteButton.classList.add("deleteButton");
            // tslint:disable-next-line: quotemark
            deleteButton.innerHTML = '<i class = "trash fas fa-trash-alt"></i>';
            itemDiv.appendChild(deleteButton);

            // Date
            let itemDate: HTMLInputElement = document.createElement("input");
            itemDate.classList.add("date");
            itemDate.setAttribute("placeholder", "Date");
            itemDate.value = _data.Entry[i].date;
            itemDiv.appendChild(itemDate);

            // Comment
            let itemComment: HTMLInputElement = document.createElement("input");
            itemComment.classList.add("comment");
            itemComment.setAttribute("placeholder", "Comment");
            itemComment.setAttribute("cols", "30");
            itemComment.setAttribute("rows", "1");
            itemComment.value = _data.Entry[i].comment;
            itemDiv.appendChild(itemComment);
           
        }
        
    }  

}