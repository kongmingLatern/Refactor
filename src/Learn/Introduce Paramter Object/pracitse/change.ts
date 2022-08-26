// 版本一
function readingsOutsideRange_change1(station: any, min, max) {
  return station.readings.filters(r => r.temp < min || r.temp > max)
}
// 版本二
function readingsOutsideRange_change2(station: any, min, range) {
  return station.readings.filters(r => r.temp < min || r.temp > range.max)
}
// 版本三
function readingsOutsideRange_change3(station: any, range) {
  return station.readings.filters(r => r.temp < range.min || r.temp > range.max)
}
// ================== 调用方 ========================
const operatingPlan = new OperatingPlan(10, 10)

const range = new NumberRange(operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling)

// 对应版本一
let alerts_1 = readingsOutsideRange_change1(
  station,
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling
)
// 对应版本二
let alerts_2 = readingsOutsideRange_change2(station, operatingPlan.temperatureFloor, range)

// 对应版本三
let alerts_3 = readingsOutsideRange_change3(station, range)

// 最后，我们可以再对 readingOutsideRange 进行重构
function readingsOutsideRange(station, range) {
  return station.readings.filter(r => !range.contains(r.temp))
}
