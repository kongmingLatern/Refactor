function getRating(driver: any) {
  return moreThanFiveLateDeliveries(driver) ? 'F' : 'C';
}

function moreThanFiveLateDeliveries(driver) {
  return driver.numberOfLateDeliveries > 5;
}