import { createStatementData } from "./createStatementData";
import { renderPlainText } from "./renderPlainText";
import { statementType } from "./type";

export function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays))
}

function htmlStatement(invoice, plays) {
  return renderHtml(createStatementData(invoice, plays))
};

function renderHtml(data: statementType) {
  let result = `<h1>Statement for ${data.customer}</h1>\n`
  result += `<table>\n`
  result += `<tr><th>play</th><th>seats</th><th>cost</th></tr>\n`
  for (let perf of data.performances!) {
    result += `<tr><td>${perf.play.name}</td><td>${perf.audience}</td><td>${usd(perf.amount / 100)}</td></tr>\n`
  }
  result += `</table>\n`
  result += `<p>Amount owed is <em>${usd(data.totalAmount! / 100)}</em></p>\n`
  return result
}
// The function assigned to a temporary variable  (mean: currency) 
export function usd(aNumber) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format(aNumber);
}