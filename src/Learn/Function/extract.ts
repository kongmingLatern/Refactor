function printOwing(invoice) {
  printBanner()
  let outstanding = calculateOutstanding();

  printDetail(outstanding);

  // print detail
  function printDetail(outstanding) {
    console.log(`name ${invoice.name}`);
    console.log(`amount ${outstanding}`);
  }
}

function printBanner() {
  // Something print
}

function calculateOutstanding() {
  return undefined;
}