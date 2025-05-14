Monte Carlo simulation is a mathematical technique that uses random sampling and repeated experiments to estimate numerical results. It’s especially useful for solving problems that are deterministic in nature but too complex to solve with direct mathematical formulas.

The name comes from the Monte Carlo Casino in Monaco, because the method relies heavily on randomness—just like gambling.

Monte Carlo methods are widely used in fields like finance, physics, engineering, and artificial intelligence to estimate values, calculate probabilities, and model systems affected by uncertainty.

In this example, we'll use Monte Carlo simulation to estimate the value of π (pi), which is the ratio of a circle's circumference to its diameter.

We know the area of a circle is given by:

A = πr^2

And the area of a square that encloses the circle (if radius=1) is:

A = (2r)^2 = 4

To simplify, we’ll only work with the first quadrant (a quarter of the circle and square):

The area of the quarter circle is π/4
The area of the unit square from (0,0) to (1,1) is 1

If we randomly generate many points inside the square, some will fall inside the quarter circle. The ratio of the number of points inside the circle to the total number of points gives an estimate of π/4.

So, we can estimate π as:

π ≈ 4 × (Points Inside Circle/Total Points)

