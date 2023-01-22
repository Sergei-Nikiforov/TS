"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
class Collection {
    constructor(...initialItems) {
        this.items = initialItems || [];
    }
    total(propName, format) {
        let totalValue = this.items.reduce((t, item) => t += Number(item[propName]), 0);
        return format ? `$${totalValue.toFixed()}` : totalValue;
    }
}
let data = new Collection(new dataTypes_1.Product("Kayak", 275), new dataTypes_1.Product("Lifejacket", 48.95));
let firstVal = data.total("price", true);
console.log(`Formatted value: ${firstVal}`);
let secondVal = data.total("price", false);
console.log(`Unformatted value: ${secondVal}`);
