# Sum and Average of Array Elements 

- This script calculates the sum and average of elements in an array using both a loop and the `reduce()` method.

---

## Method 1: loooping

```js
function sumAndAverage(arr) {
  let sum = 0;
  for (let num of arr) sum += num; // accumulate sum
  let avg = sum / arr.length;      // compute average
  return { sum, avg };             // return both
}
```

### Example

```js
sumAndAverage([10, 20, 30]); 
```

---

## Method 2: using reduce

```js
function sumAndAverageReduce(arr) {
  let sum = arr.reduce((acc, val) => acc + val, 0); // sum via reduce
  return { sum, avg: sum / arr.length };
}
```

### Example

```js
sumAndAverageReduce([10, 20, 30]);
```

---

## Notes

- Both methods return an object with `sum` and `avg`.
- Use method 2 for concise functional code.
- Handles empty arrays only if checked separately (to avoid division by zero).

---
