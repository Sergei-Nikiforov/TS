"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
function getValue(item, keyname) {
    console.log(`Value: ${item[keyname]}`);
}
let p = new dataTypes_1.Product("Running Shoes", 100);
getValue(p, "name");
getValue(p, "price");
let e = new dataTypes_1.Employee("Bob Smith", "Sales");
getValue(e, "name");
getValue(e, "role");
