import { performancesType, playType, statementType } from "../type"

class PerformanceCalculator {
  performance: performancesType
  play: playType
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance
    this.play = aPlay
  }

  get amount() {
    let result = 0
    switch (this.play.type) {
      case "tragedy":
        throw "bad thing"
      case "comedy":
        result = 30000
        if (this.performance.audience > 20) {
          result += 10000 + 500 * (this.performance.audience - 20)
        }
        result += 300 * this.performance.audience
        break;
      default:
        throw new Error(`unknown type: ${this.play.type}`)
    }
    return result
  }

  get volumeCredits() {
    let result = 0
    result += Math.max(this.performance.audience - 30, 0)
    if ("comedy" === this.play.type) {
      result += Math.floor(this.performance.audience / 5)
    }
    return result
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30)
    }
    return result
  }
}
class ComedyCalculator extends PerformanceCalculator {

}
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
    const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance))
    const result = Object.assign({}, aPerformance);
    result.play = calculator.play
    result.amount = calculator.amount
    result.volumeCredits = calculator.volumeCredits
    return result
  }
  // In order to remove temporary variable, so we can extract the variable to function 
  function playFor(aPerformance) {
    return plays[aPerformance.playID]
  }
}

function createPerformanceCalculator(aPerformance, aPlay) {
  switch (aPlay.type) {
    case "tragedy":
      return new TragedyCalculator(aPerformance, aPlay)
    case "comedy":
      return new ComedyCalculator(aPerformance, aPlay)
    default:
      throw new Error(`unknown type: ${aPlay.type}`)
  }
}