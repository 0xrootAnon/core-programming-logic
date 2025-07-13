# Harmonic Series Sum

- The **harmonic series** is the sum of reciprocals of the first `n` natural numbers:

```
H(n) = 1 + 1/2 + 1/3 + ... + 1/n
```

This script provides two methods to calculate the harmonic sum up to a given number `n`.

---

##  Method 1: Using Loop

```js
function harmonicSeries(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 1 / i; // add reciprocal of each number
  }
  return sum;
}
```

### Example

```js
harmonicSeries(5); 
```

---

##  Method 2: Using Array + `reduce()`

```js
function harmonicReduce(n) {
  return [...Array(n).keys()]             // [0, 1, 2, ..., n-1]
    .reduce((acc, val) => acc + 1 / (val + 1), 0);
}
```

- `Array(n).keys()` generates values `0` to `n - 1`
- `val + 1` ensures it starts from 1
- `reduce()` accumulates the sum of reciprocals

---

##  Notes

- Harmonic numbers grow **very slowly**, diverging to infinity.
- Time Complexity: O(n)
- Both methods return the same result, with method 2 being more concise using array manipulation.

---