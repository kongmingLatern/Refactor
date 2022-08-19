function printOwing(invoice) {
  let outstanding = calculateOutstanding(invoice);

  // print detail
  console.log(`name ${invoice.name}`);
  console.log(`amount ${outstanding}`);

}
function calculateOutstanding(invoice) {
  return undefined;
}