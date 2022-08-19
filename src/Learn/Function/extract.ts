/**
 * 
 * 提炼函数 
 * 
 * 对于只用过一次的函数来说，可以保持内联（inline）状态
 * 
 * @param invoice Object
 */
function printOwing2(invoice) {
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