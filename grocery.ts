interface GroceryItem{
    name: string;
    quantity: number;
}

class Grocery {
    name:string;
    quanitiy: number;

    constructor(name:string, quanity:number) {
        this.name = name;
        this.quanitiy = quanity;
        
    }
}

const groceries: Grocery[] = [
    new Grocery("Milk", 1),
    new Grocery("lemons", 3),
    new Grocery("Grapefruit", 4),
    new Grocery("Bagels", 7)
];
