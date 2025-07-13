# Check if a Number Can Be Expressed as the Sum of Two Squares

- This script checks whether a given number `n` can be expressed as `a² + b²` using two methods: brute-force and Fermat's theorem.

---

##  Method 1: Brute Force

```js
function isSumOfTwoSquares(n) {
  for (let a = 0; a * a <= n; a++) {
    let b = Math.sqrt(n - a * a); // check if remainder is a perfect square
    if (b === Math.floor(b)) return true;
  }
  return false;
}
```

### Example

```js
isSumOfTwoSquares(5);  
isSumOfTwoSquares(3);  
```

---

##  Method 2: Fermat's Theorem (Advanced)

```js
// from number theory (Fermat's theorem)
function isSumOfTwoSquaresFermat(n) {
  for (let i = 2; i * i <= n; i++) {
    let count = 0;
    while (n % i === 0) {
      n /= i;
      count++;
    }
    // if i ≡ 3 mod 4 and occurs odd times → not a sum of two squares
    if (i % 4 === 3 && count % 2 !== 0) return false;
  }
  return n % 4 !== 3; // check for last prime factor
}
```

### Example

```js
isSumOfTwoSquaresFermat(13); 
isSumOfTwoSquaresFermat(27); 
```

---

##  Notes

- **Brute force** is easier to understand and suitable for small numbers.
- **Fermat’s method** is efficient for large numbers, but requires knowledge of prime factorization.
- Both return a boolean indicating if such a pair `(a, b)` exists.

---