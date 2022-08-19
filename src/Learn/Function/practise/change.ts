function printOwing(invoice: any) {
  let outstanding = 0

  printBanner()

  // calculate outstanding
  for (const o of invoice.orders) {
    outstanding += o.amount
  }

  // record due date
  const today = Clock.today
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)

  // print detail
  printDetails()

  function printDetails() {
    console.log(`name ${invoice.customer}`)
    console.log(`amount ${outstanding}`)
    console.log(`due ${invoice.dueDate}`)
  }

  function printBanner() {
    console.log('****************************')
    console.log('******* Customer Owes ******')
    console.log('****************************')
  }
}