// Sieve of Eratosthenes (generate all primes ≤ n) [returns an array of all primes up to `limit`]
function sieveOfEratosthenes(limit) {
  const primes = Array(limit + 1).fill(true);
  primes[0] = primes[1] = false;
  for (let i = 2; i * i <= limit; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= limit; j += i) {
        primes[j] = false;
      }
    }
  }
  return primes.map((isPrime, i) => isPrime ? i : -1).filter(n => n !== -1);   // collect all indices which are still true (i.e., prime)
}
