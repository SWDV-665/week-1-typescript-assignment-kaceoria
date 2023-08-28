"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Grocery = /** @class */ (function () {
    function Grocery(name, quanity) {
        this.name = name;
        this.quanitiy = quanity;
    }
    return Grocery;
}());
var groceries = [
    new Grocery("Milk", 1),
    new Grocery("lemons", 3),
    new Grocery("Grapefruit", 4),
    new Grocery("Bagels", 7),
    new Grocery("Cheese", 1)
];
console.log(Grocery);
var app = document.getElementById("app");
var table = document.createElement("table");
for (var _i = 0, groceries_1 = groceries; _i < groceries_1.length; _i++) {
    var index = groceries_1[_i];
    table.textContent = table.textContent.concat(index.name).concat(", ").concat(index.quanitiy.toString());
}
app === null || app === void 0 ? void 0 : app.appendChild(table);
