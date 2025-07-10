# Prime Factorization using Optimized Trial Division (up to √n)

- This function breaks a number `n` into its prime factors (e.g., 60 => [2, 2, 3, 5])

---

```js
function primeFactorize(n) {
  const factors = [];  //initialize an empty array to store prime factors
  for (let i = 2; i * i <= n; i++) {    //loop from 2 to √n to check for possible prime factors
    while (n % i === 0) {   //while current `i` divides `n` completely (i.e., no remainder)
      factors.push(i);   // `i` is a prime factor, so store it
      n = n / i;         //divide `n` by `i` and continue checking (to handle repeated factors like 2×2×3)
    }   //this process removes all multiples of `i` from `n`
  }
  //after loop ends, if `n > 1`, it means `n` itself is a prime number
  //e.g.: after dividing 45 by 3 three times, we’re left with 5 (which is prime)
  if (n > 1) {
    factors.push(n);  //push the remaining prime number
  }
  return factors;  //return the complete list of prime factors
}
console.log(primeFactorize(60));  
// Output: [2, 2, 3, 5]
// Explanation: 60 = 2 × 2 × 3 × 5
```

---


##  How It Works 

###  Why loop till √n?
- A number greater than √n can only appear **once** in the factorization.
- If `n` is divisible by a factor `i`, it will be caught when `i <= √n`.
- Any leftover `n > 1` after the loop must be a **prime**, since all smaller factors have already been removed.

###  Why divide repeatedly in the `while` loop?
- To account for **multiple occurrences** of the same prime (e.g., 2 appears **twice** in 60).
- We must divide as long as the factor divides `n`.

###  Why check `if (n > 1)` at the end?
- To catch any **prime > √n** that wasn't divisible earlier (e.g., 29 in `58 = 2 × 29`).
