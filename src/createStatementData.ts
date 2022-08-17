import { statementType } from "./type"

export function createStatementData(invoice, plays) {
  const result: statementType = {}
  result.customer = invoice.customer
  result.performances = invoice.performances.map(enrichPerformance)
  result.totalAmount = totalAmount(result)
  result.totalVolumeCredits = totalVolumeCredits(result)
  return result

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