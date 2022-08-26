class Reading_change {
  private _customer: any
  private _quantity: any
  private _month: any
  private _year: any
  constructor(data) {
    this._customer = data.customer
    this._quantity = data.quantity
    this._month = data.month
    this._year = data.year
  }
  get customer(): any {
    return this._customer
  }
  get quantity(): any {
    return this._quantity
  }
  get month(): any {
    return this._month
  }
  get year(): any {
    return this._year
  }
  get baseCharge() {
    return baseRate(this._month, this._year) * this._quantity
  }
  // finally
  get taxableCharge() {
    return Math.max(0, this.baseCharge - taxThreshold(this._year))
  }
}

// customer 3
const rawReading = acquireReading()
const aReading_change = new Reading_change(rawReading)
const basicChargeAmount_change = aReading_change.baseCharge

// Change customer 1
const rawReading_change1 = acquireReading()
const aReading_change1 = new Reading_change(rawReading_change1)
const baseCharge_change1 = aReading_change.baseCharge

// Change customer 2
const rawReading_change2 = acquireReading()
const aReading_change2 = new Reading_change(rawReading_change2)
const taxableCharge_change2 = taxableChargeFn(aReading_change2)

// then, we can extract function to calc taxable charge
function taxableChargeFn(aReading) {
  return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year))
}

// finally we can move Function to class Reading_change
