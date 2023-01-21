"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let p = { name: 'Kayak', price: 275 };
console.log(`Mapped type: ${p.name}, ${p.price}`);
let q = { name: "Kayak", price: "apples" };
console.log(`Changed type # 1: ${q.name}, ${q.price}`);
let r = { nameProperty: "Kayak", priceProperty: 12 };
console.log(`Changed type # 2: ${r.nameProperty}, ${r.priceProperty}`);
