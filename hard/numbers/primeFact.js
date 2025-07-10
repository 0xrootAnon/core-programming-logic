//prime factorization using optimized trial division (up to √n)
function primeFactorize(n) {
  const factors = [];
  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
      factors.push(i);
      n = n / i;
    }
  }
  if (n > 1) factors.push(n); // if remainder is a prime > sqrt(n)
  return factors;
}
primeFactorize(60);
