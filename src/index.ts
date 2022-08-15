import { getData } from "./getData";
import {
  statement
} from "./statement";

const [invoices, plays] = getData()

const result = statement(invoices, plays);

console.log(result);
