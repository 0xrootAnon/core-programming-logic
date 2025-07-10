# Prime Number Check; Logic & Code Explained 

This document explains **6 different methods** to check whether a number is prime using JavaScript, with each method fully commented and explained for beginner to intermediate learners.

---

##  What is a Prime Number?

A **prime number** is a natural number greater than 1 that has **no positive divisors other than 1 and itself**.
**Examples**: `2, 3, 5, 7, 11, 13, ...`

---

##  Method Comparison Table

| Method Name            | Efficiency       | Style       | Suitable For           | Notes                                 |
|------------------------|------------------|-------------|------------------------|----------------------------------------|
| `isPrimeBrute`         |  Slow           | Iterative   | Small numbers          | Checks all numbers till `n-1`         |
| `isPrimeSqrt`          |  Fast           | Iterative   | Medium-sized values    | Loops only till √n                    |
| `isPrimeFast`          |  Very Fast     | Optimized   | Large numbers          | Skips even numbers                    |
| `isPrimeRecursive`     |  Slow           | Recursive   | Learning recursion     | Not memory-efficient                  |
| `sieveOfEratosthenes`  |  Very Fast     | Bulk prime gen | All primes ≤ `n`     | Not for checking single number        |
| `isProbablyPrime`      |  Probabilistic  | Randomized  | Large numbers (crypto) | May give false positives (approximate)|

---

#  Method 1: Brute Force

```js
function isPrimeBrute(n) {
  if (n <= 1) return false;                  // 0 and 1 are not prime numbers
  for (let i = 2; i < n; i++) {              // check divisibility from 2 to n-1
    if (n % i === 0) return false;           // if divisible, not prime
  }
  return true;                               // if loop completes, it's prime
}
```
**Logic:** Check every number from 2 to n-1 to see if it divides n. If any number divides n, it’s not prime.

---

# Method 2: Loop Till √n

```js
function isPrimeSqrt(n) {
  if (n <= 1) return false;                   // negative numbers, 0 and 1 are not prime
  for (let i = 2; i <= Math.sqrt(n); i++) {   // loop only up to square root of n
    if (n % i === 0) return false;            // if divisible, it's not prime
  }
  return true;                                // otherwise, it's prime
}
```
**Logic:** If a number n is divisible by a factor greater than √n, the smaller pair factor must have already appeared before √n.

---

# Method 3: Skip Even Numbers (Highly Optimized)

```js
function isPrimeFast(n) {
  if (n <= 1) return false;                    // not prime
  if (n === 2) return true;                    // 2 is the only even prime
  if (n % 2 === 0) return false;               // skip all even numbers
  for (let i = 3; i <= Math.sqrt(n); i += 2) { // check only odd numbers
    if (n % i === 0) return false;
  }
  return true;
}
```
**Logic:** After checking for 2, skip all even numbers. This reduces about 50% of iterations.

---

# Method 4: Recursion

```js
function isPrimeRecursive(n, i = 2) {
  if (n <= 1) return false;                     // not prime
  if (i > Math.sqrt(n)) return true;            // base case: no factor found
  if (n % i === 0) return false;                // divisible => not prime
  return isPrimeRecursive(n, i + 1);            // recursive step
}
```
**Logic:** Checks each number recursively until i > √n.
**Note: Avoid this for large numbers. It may cause stack overflow.*

---

# Method 5: Sieve of Eratosthenes (Find all primes ≤ n)

```js
function sieveOfEratosthenes(limit) {
  const primes = Array(limit + 1).fill(true);  // start assuming all numbers are prime
  primes[0] = primes[1] = false;               // 0 and 1 are not prime
  for (let i = 2; i * i <= limit; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= limit; j += i) {
        primes[j] = false;                     // mark all multiples of i as not prime
      }
    }
  }
  return primes
    .map((isPrime, i) => isPrime ? i : -1)     // map index to number if prime
    .filter(n => n !== -1);                    // remove non-primes
}
```
**Logic:** Marks all multiples of each prime number as non-prime in one go. Very efficient for generating all primes up to a given number.

---

# Method 6: Fermat's Little Theorem (Probabilistic)

```js
function isProbablyPrime(n, k = 5) {
  if (n <= 1 || n === 4) return false;
  if (n <= 3) return true;
  for (let i = 0; i < k; i++) {
    const a = 2 + Math.floor(Math.random() * (n - 4)); // pick random base
    if (Math.pow(a, n - 1) % n !== 1) return false;     // Fermat test
  }
  return true;
}
```
**Logic:** Uses Fermat's Little Theorem: If n is prime and a is any integer such that 1 < a < n-1, then a^(n-1) % n === 1.
**Very fast for large numbers but can give false positives (known as Carmichael numbers)*

##  Summary

Each method has its own strengths and best use cases:
-  **Learning?** Start with `isPrimeBrute` or `isPrimeRecursive`
-  **Need a fast single check?** Use `isPrimeFast`
-  **Want to generate many primes?** Use `sieveOfEratosthenes`
-  **Working with cryptography or huge values?** Use `isProbablyPrime` (with caution)
