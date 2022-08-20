function reportLines_change(aCustomer: any) {
  const lines: any = []
  lines.push({
    "name": aCustomer.name,
  })
  lines.push({
    "location": aCustomer.location,
  })
  gatherCustomer(lines, aCustomer)
  return lines
}