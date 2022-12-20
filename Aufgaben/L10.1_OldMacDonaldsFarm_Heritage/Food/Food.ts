namespace L10_OldMacDonaldsFarm_Heritage {
    
    export class Food {
        type: string;
        amount: number;

        constructor(_type: string, _amount: number) {
            console.log("Food constructor");

            this.type = _type;
            this.amount = _amount;
        }
    }
}