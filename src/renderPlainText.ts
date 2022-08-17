import { statementType } from "./type";

export function renderPlainText(data: statementType) {

  // The function assigned to a temporary variable  (mean: currency) 
  function usd(aNumber) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    }).format(aNumber);
  }


  let result = `Statement for ${data.customer}\n`;

  for (let perf of data.performances!) {
    result += `${perf.play.name}: ${usd(perf.amount / 100)} (${perf.audience} seats)\n`
  }

  result += `Amount owed is ${usd(data.totalAmount! / 100)}\n`
  result += `You earned ${data.totalVolumeCredits!} credits\n`

  return result
}