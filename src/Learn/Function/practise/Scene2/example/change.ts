function printOwing_scene_example_change(invoice: any) {

  printBanner()

  // calculate outstanding
  let outstanding = calculateOutstanding(invoice)

  recordDueDate(invoice)
  printDetails(invoice, outstanding)
}

function calculateOutstanding(invoice: any) {
  let result = 0
  for (const o of invoice.orders) {
    result += o.amount
  }
  return result
}
