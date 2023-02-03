"use strict";
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('Chriss', 'MCS website', 200);
const invTwo = new Invoice('Taryl', 'CP website', 250);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// invOne.client = "Godden";
// invOne.amount = 240;
// invTwo.amount = 300;
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
// console.log(invoices);
const anchor = document.querySelector('a');
console.log(anchor.href);
const form = document.querySelector('.new-item-form');
// console.log(form.children);
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
