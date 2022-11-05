namespace L04_Einkaufsliste {

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

    export let data: Data = {
        Entry: [
            {
                name: "Milk",
                amount: 3,
                comment: "",
                date: "29.10.2022",
                checked: true
            },
            {
                name: "Pepper",
                amount: 4,
                comment: "Red",
                date: "",
                checked: false
            },
            {
                name: "Bread",
                amount: 1,
                comment: "",
                date: "29.10.2022",
                checked: true
            },
            {
                name: "Tomatoes",
                amount: 5,
                comment: "Cocktail",
                date: "",
                checked: false
            }

        ]
    };
}