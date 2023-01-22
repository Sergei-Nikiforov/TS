import { City, Person, Product, Employee } from "../src/dataTypes";

type MakeReadWrite<T> = {
    -readonly [P in keyof T] : T[P]
};

type optionalType = Partial<Product>;
type requiredType = Required<optionalType>;
type readOnlyType = Readonly<requiredType>;
type readWriteType = MakeReadWrite<readOnlyType>;

let p: readWriteType = { name: "Kayak", price: 275};
console.log(`Mapped type: ${p.name}, ${p.price}`);