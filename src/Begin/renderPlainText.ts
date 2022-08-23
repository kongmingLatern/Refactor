import { statementType } from "../type";
import { usd } from "./statement";

export function renderPlainText(data: statementType) {

  let result = `Statement for ${data.customer}\n`;

  for (let perf of data.performances!) {
    result += `${perf.play.name}: ${usd(perf.amount / 100)} (${perf.audience} seats)\n`
  }

  result += `Amount owed is ${usd(data.totalAmount! / 100)}\n`
  result += `You earned ${data.totalVolumeCredits!} credits\n`

  return result
}
