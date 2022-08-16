export function statement(invoice, plays) {
  // calculate total amount for this invoice
  function amountFor(play: any, perf: any) {
    let result = 0;
    switch (play.type) {
      case "tragedy":
        result = 40000;
        if (perf.audience > 30) {
          result += 1000 * (perf.audience - 30);
        }
        break;
      case "comedy":
        result = 30000;
        if (perf.audience > 20) {
          result += 300 * perf.audience;
        }
        break;
      default:
        throw new Error(`unknown type: ${play.type}`);
    }
    return result;
  }

  let result = `Statement for ${invoice.customer}\n`;
  let totalAmount = 0;
  let volumeCredits = 0;
  let format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format;

  for (let perf of invoice.performances) {
    let thisAmount = amountFor(plays[perf.playID], perf);
    volumeCredits += Math.max(perf.audience - 30, 0)
    if ("comedy" === plays[perf.playID].type) volumeCredits += Math.floor(perf.audience / 5)

    result += `${plays[perf.playID].name}: ${format(thisAmount / 100)} (${perf.audience} seats)\n`

    totalAmount += thisAmount
  }
  result += `Amount owed is ${format(totalAmount / 100)}\n`
  result += `You earned ${volumeCredits} credits\n`
  return result

}