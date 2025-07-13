#  Find the Missing Number in an Array

- You are given an array of size `n` that contains numbers from `0` to `n` with **one number missing**. The goal is to identify that missing number.

---

```js
// Method A: Sum Formula
function findMissingSum(arr, n) {
  const expected = (n * (n + 1)) / 2;           // Total sum of 0 to n
  const actual = arr.reduce((a, b) => a + b, 0); // Sum of all elements in array
  return expected - actual;                     // The missing value
}
```

###  Logic:
- Use the formula for the sum of first `n` natural numbers:  
  \[ \text{Sum} = \frac{n(n+1)}{2} \]
- Subtract actual array sum from expected to find the missing number.

---

```js
// Method B: XOR Trick
function findMissingXOR(arr, n) {
  let xo = 0;
  // XOR all numbers from 0 to n
  for (let i = 0; i <= n; i++) xo ^= i;
  // XOR all numbers in the array
  for (let x of arr) xo ^= x;
  return xo; // Remaining value is the missing number
}
```

###  Logic:
- XOR of a number with itself is 0, and XOR with 0 is the number itself.
- All paired numbers cancel out. The remaining number is the missing one.

---

##  Example

```js
findMissingSum([0, 1, 3, 4], 4);     
findMissingXOR([0, 1, 3, 4], 4);    
```

---

##  Comparison Table

| Method        | Time   | Space | Best For                     |
|---------------|--------|-------|------------------------------|
| Sum Formula   | O(n)   | O(1)  | Simple arithmetic logic      |
| XOR Trick     | O(n)   | O(1)  | Bitwise logic, no overflow   |

---

##  Assumptions

- Array contains unique numbers from `0` to `n` (inclusive), **1 missing**
- No duplicates
- Input array size = `n` (1 less than total range)

---
