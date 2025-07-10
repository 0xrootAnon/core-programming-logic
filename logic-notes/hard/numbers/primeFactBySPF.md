# SPF-Based Prime Factorization

- This code first PRECOMPUTES the Smallest Prime Factor (SPF) of every number up to a given `maxLimit`.
- Then, using this SPF table, it factorizes any number <= maxLimit in O(log n) time.

---

### STEP 1: Precompute SPF for all numbers up to maxLimit using a modified sieve

```js
function computeSPF(maxLimit) {
  const spf = Array(maxLimit + 1).fill(0);  //create an array `spf` of size (maxLimit + 1), filled with 0 initially (spf[i] will eventually store the smallest prime that divides `i`)
  for (let i = 2; i <= maxLimit; i++) {     //start filling SPF for all numbers from 2 up to maxLimit
    if (spf[i] === 0) { //if spf[i] is still 0, it means `i` is a prime number
      for (let j = i; j <= maxLimit; j += i) {  //mark `i` as the smallest prime factor for all multiples of `i`
        if (spf[j] === 0) spf[j] = i;           //**********only update if it's not already marked (we want the smallest)*************
      }
    }
  }
  return spf; //return the full SPF table for use in factorization
}
```

### STEP 2: Use the SPF array to factorize a number in O(log n) time

```js
function getPrimeFactors(n, spf) {
  const factors = []; //array to store prime factors
  while (n > 1) {   //keep dividing `n` by its smallest prime factor until it becomes 1
    factors.push(spf[n]);      //push the smallest prime factor
    n = Math.floor(n / spf[n]); //reduce `n` by dividing with its SPF
  }
  return factors; //return final list of prime factors in ascending order
}
```

#### TESTING / EXAMPLE USAGE:

```js
const max = 1000000; //define an upper limit for which we want to support factorization
const spf = computeSPF(max); //precompute the SPF table only ONCE
console.log(getPrimeFactors(60, spf)); // Output: [2, 2, 3, 5]
console.log(getPrimeFactors(75, spf)); // Output: [3, 5, 5]
```

## What is SPF (Smallest Prime Factor)?

- For every number `i`, `SPF[i]` stores the **smallest prime** that divides `i`.

###  Examples:
- `SPF[10] = 2` → (because 2 is the smallest prime dividing 10)  
- `SPF[49] = 7` → (because 7 is the smallest prime dividing 49)

---

## Why is SPF useful?

- After building the **SPF table once**, you can **factorize any number <= maxLimit in O(log n)**.
- Much faster than checking divisibility by trial division for each number.

---

## Time & Space Complexity

| Operation              | Complexity        |
|------------------------|-------------------|
| `computeSPF(maxLimit)` | `O(n log log n)`   |
| `getPrimeFactors(n)`   | `O(log n)`         |
| Space                  | `O(n)`             |

---

## When to Use

Use **SPF** when:
- You need to **factorize many numbers efficiently**
- You're working within a **known upper bound** (e.g., 10⁶)
- You want the **fastest way to factorize repeatedly**
