"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
class ArrayCollection {
    constructor() {
        this.items = [];
    }
    add(...newItems) {
        this.items.push(...newItems);
    }
    get count() {
        return this.items.length;
    }
}
class ProductCollection extends ArrayCollection {
    get(searchTerm) {
        return this.items.find(item => item.name === searchTerm);
    }
}
class PersonCollection extends ArrayCollection {
    get(searchTerm) {
        return this.items.find(item => item.name === searchTerm || item.city === searchTerm);
    }
}
let peopleCollection = new PersonCollection();
peopleCollection.add(new dataTypes_1.Person("Bob Smith", "London"), new dataTypes_1.Person("Dora Peters", "New York"));
let productCollection = new ProductCollection();
productCollection.add(new dataTypes_1.Product("Running Shoes", 100), new dataTypes_1.Product("Hat", 25));
[peopleCollection, productCollection].forEach(c => console.log(`Size: ${c.count}`));
