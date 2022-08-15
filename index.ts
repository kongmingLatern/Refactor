import {
  getData,
  statement
} from "./statement";
const [invoices, plays] = getData()

console.log(invoices, plays);

const result = statement(invoices, plays);
console.log(result);