import Invoice from "./modules/invoices.js";

const invOne = new Invoice('Chriss', 'MCS website', 200);
const invTwo = new Invoice('Taryl', 'CP website', 250);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

// invOne.client = "Godden";
// invOne.amount = 240;
// invTwo.amount = 300;

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
})

// console.log(invoices);

const anchor = document.querySelector('a')!;
console.log(anchor.href);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    );
})