export function statement(invoice, plays) {
  let result = `Statement for ${invoice.customer}\n`;
  let totalAmount = 0;
  let volumeCredits = 0;
  let format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format;

  for (let perf of invoice.performances) {
    const play = plays[perf.playID];
    let thisAmount = amountFor(play, perf);
    volumeCredits += Math.max(perf.audience - 30, 0)
    if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5)

    result += `${play.name}: ${format(thisAmount / 100)} (${perf.audience} seats)\n`

    totalAmount += thisAmount
  }
  result += `Amount owed is ${format(totalAmount / 100)}\n`
  result += `You earned ${volumeCredits} credits\n`
  return result

  // calculate total amount for this invoice
  function amountFor(play: any, perf: any) {
    let thisAmount = 0;
    switch (play.type) {
      case "tragedy":
        thisAmount = 40000;
        if (perf.audience > 30) {
          thisAmount += 1000 * (perf.audience - 30);
        }
        break;
      case "comedy":
        thisAmount = 30000;
        if (perf.audience > 20) {
          thisAmount += 300 * perf.audience;
        }
        break;
      default:
        throw new Error(`unknown type: ${play.type}`);
    }
    return thisAmount;
  }
}