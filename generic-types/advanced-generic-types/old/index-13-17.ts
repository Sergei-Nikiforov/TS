import { City, Person, Product, Employee } from "../src/dataTypes";

type Mapped<T> = {
    [P in keyof T]: T[P];
}

let p: Mapped<Product> = { name: "Kayak", price: 275};
console.log(`Mapped type: ${p.name}, ${p.price}`);

let c: Mapped<City> = { name: "London", population: 8136000};
console.log(`Mapped type: ${c.name}, ${c.population}`);