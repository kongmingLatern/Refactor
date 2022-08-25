function trackSummary(points: any) {
  const totalTime = calculateTime()
  const totalDistance = calculateDistance()
  const pace = totalTime! / 60 / totalDistance!
  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace
  }
  function calculateDistance() {
    let result = 0
    for (let i = 0; i < points.length; i++) {
      result += distance(points[i - 1], points[i])
    }
    return result
  }

  function distance(p1, p2) {
    return 1
  }
  function calculateTime() {
    return undefined;
  }

}
