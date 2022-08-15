import {
  getData,
  statement
} from "./statement.js";
const [invoices, plays] = getData()

console.log(invoices, plays);

const result = statement(invoices, plays);
console.log(result);