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

    static reverse<ArrayType>(items: ArrayType[]): ArrayType[] {
        return items.reverse();
    }
}

let mixedData = new DataCollection<Person | Product>([...people, ...products]);
function isProduct(target: Person | Product): target is Product {
    return target instanceof Product;
}

function isPerson(target: Person | Product): target is Person {
    return target instanceof Person;
}

let filteredProducts = mixedData.filter<Product>(isProduct);
filteredProducts.forEach(p => console.log(`Product: ${ p.name}, ${p.price}`));

let filteredPersons = mixedData.filter<Person>(isPerson);
filteredPersons.forEach(p => console.log(`Person: ${p.name}, ${p.city}`));

let reversedCities = DataCollection.reverse<City>(cities);
reversedCities.forEach(c => console.log(`City: ${c.name}, ${c.population}`));

let peopleCities = DataCollection.reverse<Person>(people);
peopleCities.forEach(p => console.log(`Person: ${p.name}, ${p.city}`));