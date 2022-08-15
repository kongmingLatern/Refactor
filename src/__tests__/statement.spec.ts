import { describe, expect, it } from 'vitest'
import { statement } from '../statement';
describe('statement', () => {
  it('happy path', () => {
    const invoices = {
      "customer": "BigCo",
      "performances": [{
        "playID": "hamlet",
        "audience": 55
      },
      {
        "playID": "as-like",
        "audience": 35
      },
      {
        "playID": "othello",
        "audience": 40
      }
      ]
    }
    const plays = {
      "hamlet": {
        "name": "Hamlet",
        "type": "tragedy"
      },
      "as-like": {
        "name": "As You Like It",
        "type": "comedy"
      },
      "othello": {
        "name": "Othello",
        "type": "tragedy"
      }

    }
    const result = statement(invoices, plays)
    expect(result).toMatchSnapshot()
  })
})