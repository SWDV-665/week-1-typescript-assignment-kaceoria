class Grocery{
    name:string;
    quanitiy:number;

    constructor(name: string, quanity: number) {
        this.name= name;
        this.quanitiy = quanity;
        
    }
}

let groceries = [
    new Grocery("Milk", 1),
    new Grocery("lemons", 3),
    new Grocery("Grapefruit", 4),
    new Grocery("Bagels", 7),
    new Grocery("Cheese", 1) 
]

console.log(Grocery);
 export{};

const app = document.getElementById("app");

const table = document.createElement("table");

for(var index of groceries){
    table.textContent = table.textContent.concat(index.name).concat(", ").concat(index.quanitiy.toString());
}

app?.appendChild(table);