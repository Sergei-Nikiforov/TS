import { City, Person, Product, Employee } from "../src/dataTypes";

let people = [new Person("Bob Smith", "London"), new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City('London', 8136000), new City('Paris', 2141000)];
let employees = [new Employee('Bob Smith', 'Sales'), new Employee('Alice Jones', 'Sales')];

class DataCollection<T> {
    protected items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }

    filter<V extends T>(predicate: (target: T) => target is V): V[] {
        return this.items.filter(item => predicate(item)) as V[];
    }

    static reverse(items: any[]) {
        return items.reverse();
    }
}

let mixedData = new DataCollection<Person | Product>([...people, ...products]);
function isProduct(target: Person | Product): target is Product {
    return target instanceof Product;
}

let filteredProducts = mixedData.filter<Product>(isProduct);
filteredProducts.forEach(p => console.log(`Product: ${ p.name}, ${p.price}`));

let reversedCities: City[] = DataCollection.reverse(cities);
reversedCities.forEach(c => console.log(`City: ${c.name}, ${c.population}`));