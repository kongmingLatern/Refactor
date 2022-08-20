function reportLines(aCustomer: any) {
  const lines: any = []
  gatherCustomer(lines, aCustomer)
  return lines
}
function gatherCustomer(out, aCustomer) {
  out.push({
    "name": aCustomer.name,
  })

  out.push({
    "location": aCustomer.location,
  })
}