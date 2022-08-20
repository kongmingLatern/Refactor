function getRating_change(driver) {
  return (driver.numberOfLateDeliveries > 5) ? 'F' : 'C';
}