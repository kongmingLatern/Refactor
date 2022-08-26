const reading = {
  customer: 'ivan',
  quantity: 10,
  month: 5,
  year: 2017,
}

// customer 1

const aReading = acquireReading()

const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity

function baseRate(month, year) {
  // Implement
  return month + year
}
function acquireReading() {
  return {
    quantity: 10,
    month: 1,
    year: 2018,
  }
}

// customer 2

function taxThreshold(year) {
  return year
}
const base_2 = baseRate(aReading.month, aReading.year) * aReading.quantity
const taxbleCharge = Math.max(0, base_2 - taxThreshold(aReading.year))

// customer 3

const basicChargeAmount = calculateBaseCharge_change(aReading)

function calculateBaseCharge_change(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity
}
