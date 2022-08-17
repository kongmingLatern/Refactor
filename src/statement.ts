interface playType {
  name: string;
}
interface performancesType {
  play: playType,
  amount: number,
  volumeCredits: number,
  playID: string,
  audience: number
}
interface statementType {
  customer?: string
  performances?: Array<performancesType>,
  totalAmount?: number,
  totalVolumeCredits?: number
}
export function statement(invoice, plays) {
  const statementData: statementType = {}
  statementData.customer = invoice.customer
  statementData.performances = invoice.performances.map(enrichPerformance)
  statementData.totalAmount = totalAmount(statementData)
  statementData.totalVolumeCredits = totalVolumeCredits(statementData)
  return renderPlainText(statementData, plays)

  // calculate total volumeCredits
  function totalVolumeCredits(data) {
    return data.performances.reduce((volume, perf) => volume + perf.volumeCredits, 0)
  }
  // calculate total amount
  function totalAmount(data) {
    return data.performances.reduce((total, perf) => total + perf.amount, 0)
  }
  function enrichPerformance(aPerformance) {
    const result = Object.assign({}, aPerformance);
    result.play = playFor(result)
    result.amount = amountFor(result)
    result.volumeCredits = volumeCreditsFor(result)
    return result
  }
  // In order to remove temporary variable, so we can extract the variable to function 
  function playFor(aPerformance) {
    return plays[aPerformance.playID]
  }
  // calculate total amount for this invoice
  function amountFor(aPerformance: any) {
    let result = 0;
    switch (aPerformance.play.type) {
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
        throw new Error(`unknown type: ${aPerformance.play.type}`);
    }
    return result;
  }
  // calculate amount of this volume
  function volumeCreditsFor(aPerformance: any) {
    let result = 0
    result += Math.max(aPerformance.audience - 30, 0);

    if ("comedy" === (aPerformance.play.type)) {
      result += Math.floor(aPerformance.audience / 5);
    }
    return result
  }
}

function renderPlainText(data: statementType, plays: any) {

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