# Sieve of Eratosthenes : Count/List All Primes up to `n`

This method efficiently generates all prime numbers ≤ `n` using the **Sieve of Eratosthenes** algorithm. It runs in **O(n log log n)** time and is highly optimized for range-based prime queries.

---

```js
// Sieve of Eratosthenes (generate all primes ≤ n)
// Returns an array of all prime numbers up to the given `limit`
function sieveOfEratosthenes(limit) {
  const primes = Array(limit + 1).fill(true); // Step 1: Assume all numbers from 0 to `limit` are prime
  primes[0] = primes[1] = false;              // Step 2: Mark 0 and 1 as non-prime
  for (let i = 2; i * i <= limit; i++) {      // Step 3: Loop through numbers up to √limit
    if (primes[i]) {                          // If current number is still marked as prime
      for (let j = i * i; j <= limit; j += i) {
        primes[j] = false;                    // Mark all multiples of i as non-prime
      }
    }
  }
  // Step 4: Collect all indices (i.e., numbers) still marked true (i.e., primes)
  return primes
    .map((isPrime, i) => isPrime ? i : -1)    // Replace `true` with its index, `false` with -1
    .filter(n => n !== -1);                   // Remove all non-prime (-1) entries
}
```

**Logic:** Marks all multiples of each prime number as non-prime in one go. Very efficient for generating all primes up to a given number.
