interface statementType {
  customer?: string
  performances?: Record<string, any>
}
export function statement(invoice, plays) {
  function enrichPerformance(aPerformance) {
    const result = Object.assign({}, aPerformance);
    return result
  }
  const statementData: statementType = {}
  statementData.customer = invoice.customer
  statementData.performances = invoice.performances.map(enrichPerformance)
  return renderPlainText(statementData, plays)
}


function renderPlainText(data, plays) {
  // calculate total amount for this invoice
  function amountFor(aPerformance: any) {
    let result = 0;
    switch (playFor(aPerformance).type) {
      case "tragedy":
        result = 40000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case "comedy":
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 300 * aPerformance.audience;
        }
        break;
      default:
        throw new Error(`unknown type: ${playFor(aPerformance).type}`);
    }
    return result;
  }

  // In order to remove temporary variable, so we can extract the variable to function 
  function playFor(aPerformance) {
    return plays[aPerformance.playID]
  }

  // calculate amount of this volume
  function volumeCreditsFor(aPerformance: any) {
    let result = 0
    result += Math.max(aPerformance.audience - 30, 0);

    if ("comedy" === playFor(aPerformance).type) {
      result += Math.floor(aPerformance.audience / 5);
    }
    return result
  }

  // The function assigned to a temporary variable  (mean: currency) 
  function usd(aNumber) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    }).format(aNumber);
  }

  // calculate total volumeCredits
  function totalVolumeCredits() {
    let result = 0;
    for (let perf of data.performances) {
      result += volumeCreditsFor(perf);
    }
    return result;
  }

  // calculate total amount
  function appleSauce() {
    let result = 0;
    for (let perf of data.performances) {
      result += amountFor(perf);
    }
    return result;
  }
  let result = `Statement for ${data.customer}\n`;

  for (let perf of data.performances) {
    result += `${playFor(perf).name}: ${usd(amountFor(perf) / 100)} (${perf.audience} seats)\n`
  }

  result += `Amount owed is ${usd(appleSauce() / 100)}\n`
  result += `You earned ${totalVolumeCredits()} credits\n`

  return result
}