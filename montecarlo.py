import random

def estimate_pi(num_samples):
    inside_circle = 0

    for _ in range(num_samples):
        x = random.uniform(0, 1)
        y = random.uniform(0, 1)

        if x**2 + y**2 <= 1:
            inside_circle += 1

    return 4 * inside_circle / num_samples

# Example run
samples = 1000000
result = estimate_pi(samples)
print(f"Estimated value of π using {samples} samples: {result}")
