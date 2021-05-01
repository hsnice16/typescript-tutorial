import { Invoice } from './classes/Invoice.js'; // always import .js file    
console.log(new Invoice('a', 'd', 1).format());
// form
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, 
    // amount.value
    amount.valueAsNumber);
});
