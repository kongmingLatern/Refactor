function printOwing_template1(invoice) {
  let outstanding = 0

  printBanner()

  for (const o of invoice.orders) {
    outstanding += o.amount
  }

  const today = new Date()
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)

  // print detail
  console.log(`name ${invoice.customer}`)
  console.log(`amount ${outstanding}`)
  console.log(`due ${invoice.dueDate}`)
}