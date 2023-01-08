import { Person, Product } from "../src/dataTypes";

let people = [new Person("Bob Smith", "London"), new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

class DataCollection<T> {
    private items: T[] = [];

    constructor(initialItem: T[]) {
        this.items.push(...initialItem);
    }

    add(newItem: T) {
        this.items.push(newItem);
    }

    getItem(index: number) {
        return this.items[index];
    }
}

let peopleData = new DataCollection<Person>(people);
let firstPerson = peopleData.getItem(0);
console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);