import { City, Person, Product, Employee } from "../src/dataTypes";

type SelectProperties<T, K extends keyof T> = {
    [P in K]: T[P];
}

let p1: SelectProperties<Product, 'name'> = { name: 'Kayak' };
let p2: Pick<Product, 'name'> = { name: 'Kayak' };
let p3: Omit<Product, 'price'> = { name: 'Kayak' };

console.log(`Custom mapped type: ${p1.name}`);
console.log(`Built-in mapped type (Pick): ${p2.name}`);
console.log(`Built-in mapped type (Omit): ${p3.name}`);