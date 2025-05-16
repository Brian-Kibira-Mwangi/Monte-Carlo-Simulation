function estimatePi(numPoints) {
  let insideCircle = 0;

  for (let i = 0; i < numPoints; i++) {
    const x = Math.random();
    const y = Math.random();

    if (x * x + y * y <= 1) {
      insideCircle++;
    }
  }

  const piEstimate = (insideCircle / numPoints) * 4;
  return piEstimate;
}

// Example: Run with 1 billion points
const numPoints = 1_000_000_000;
console.time("Monte Carlo Pi");
const pi = estimatePi(numPoints);
console.timeEnd("Monte Carlo Pi");

console.log(`Estimated Pi with ${numPoints.toLocaleString()} points:`, pi);
