"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
function FilterArray(data, predicate) {
    return data.filter(item => !predicate(item));
}
let dataArray = [new dataTypes_1.Product("Kayak", 275), new dataTypes_1.Person("Bob", "London"), new dataTypes_1.Product("Lifejacket", 27.50)];
function isProduct(item) {
    return item instanceof dataTypes_1.Product;
}
let filteredData = FilterArray(dataArray, isProduct);
filteredData.forEach(item => console.log(`Person: ${item.name}`));
