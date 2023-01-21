import { City, Person, Product, Employee } from "../src/dataTypes";

function getValue<T, K extends keyof T>(item: T, keyname: K) {
    console.log(`Value: ${item[keyname]}`);
}

type priceType = Product['price'];
type allPrice = Product[keyof Product];

let p = new Product("Running Shoes", 100);
getValue<Product, 'name'>(p, "name");
getValue<Product, 'price'>(p, "price");

let e = new Employee("Bob Smith", "Sales");
getValue(e, "name");
getValue(e, "role");