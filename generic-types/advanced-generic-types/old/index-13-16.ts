import { City, Person, Product, Employee } from "../src/dataTypes";

type MappedProduct = {
    [P in keyof Product]: Product[P];
}

let p: MappedProduct = { name: 'Kayak', price: 275};
console.log(`Mapped type: ${p.name}, ${p.price}`);

type AllowStrings = {
    [P in keyof Product]: Product[P] | string;
}

let q: AllowStrings = { name: "Kayak", price: "apples" };
console.log(`Changed type # 1: ${q.name}, ${q.price}`);

type ChangeNames = {
    [P in keyof Product as `${P}Property`]: Product[P];
}

let r: ChangeNames = { nameProperty: "Kayak", priceProperty: 12 };
console.log(`Changed type # 2: ${r.nameProperty}, ${r.priceProperty}`);