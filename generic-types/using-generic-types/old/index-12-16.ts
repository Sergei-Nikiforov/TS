import { City, Person, Product, Employee } from "../src/dataTypes";

let people = [new Person("Bob Smith", "London"), new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City('London', 8136000), new City('Paris', 2141000)];
let employees = [new Employee('Bob Smith', 'Sales'), new Employee('Alice Jones', 'Sales')];

class DataCollection<T extends { name: string }> {
    protected items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }

    collate<U>(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
        let results: (T & U)[] = [];

        this.items.forEach(item => {
            let match = targetData.find(d => (d[targetProp as keyof U]) as unknown === (item[itemProp as keyof T]) as unknown);
            if (match !== undefined) {
                results.push({ ...match, ...item });
            }
        })
        return results;
    }
}

class SearchableCollection<T extends Employee | Person> extends DataCollection<T> {
    constructor(initialItem: T[]) {
        super(initialItem);
    }

    find(searchTerm: string): T[] {
        return this.items.filter(item => {
            if (item instanceof Employee) {
                return item.name === searchTerm || item.role === searchTerm;
            } else if (item instanceof Person) {
                return item.name === searchTerm || item.city === searchTerm;
            }
        })
    }
}

let employeeData = new SearchableCollection<Employee>(employees);
employeeData.find('Sales').forEach(e => console.log(`Employee ${ e.name }, ${ e.role}`));