// checking for primes:

// method 1: brute force (slowest) [checks divisibility from 2 to n-1]
function isPrimeBrute(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// method 2: loop till √n (faster) [only checks up to square root of n]
function isPrimeSqrt(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// method 3: skip even numbers (most optimal for single number check)  [skips even numbers after checking 2]
function isPrimeFast(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

// method 4: recursion (educational use only) [checks recursively from i=2 to √n]
function isPrimeRecursive(n, i = 2) {
  if (n <= 1) return false;
  if (i > Math.sqrt(n)) return true;
  if (n % i === 0) return false;
  return isPrimeRecursive(n, i + 1);
}

// method 5: Sieve of Eratosthenes (generate all primes ≤ n) [returns an array of all primes up to `limit`]
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

// method 6: Fermat's Little Theorem (probabilistic) [not 100% accurate, good for very large numbers]
function isProbablyPrime(n, k = 5) {
  if (n <= 1 || n === 4) return false;
  if (n <= 3) return true;
  for (let i = 0; i < k; i++) {
    const a = 2 + Math.floor(Math.random() * (n - 4));
    if (Math.pow(a, n - 1) % n !== 1) return false;    
  }
  return true;
}
