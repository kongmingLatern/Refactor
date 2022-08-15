import { describe, expect, it } from 'vitest'
import { getData } from '../getData';
describe('first test', () => {
  it('getData', () => {
    const [invoices, plays] = getData();
    expect(invoices).toEqual([{
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
    }]
    )
    expect(plays).toEqual({
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
    )
  })
})