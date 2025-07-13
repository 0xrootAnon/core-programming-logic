# Second Largest and Second Smallest Element in Array

- This script finds the **second largest** and **second smallest** elements in a numeric array using linear traversal.

---

```js
// find the second largest element
function secondLargest(arr) {
  let max = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > max) {
      second = max;   // update second before max
      max = num;
    } else if (num > second && num !== max) {
      second = num;   // only update if not equal to max
    }
  }
  return second;
}
```

### Example

```js
secondLargest([10, 20, 30, 40]); 
```

---

```js
// find the second smallest element
function secondSmallest(arr) {
  let min = Infinity, second = Infinity;
  for (let num of arr) {
    if (num < min) {
      second = min;   // update second before min
      min = num;
    } else if (num < second && num !== min) {
      second = num;   // only update if not equal to min
    }
  }
  return second;
}
```

### Example

```js
secondSmallest([10, 20, 5, 8]);
```

---

##  Notes

- Handles duplicates by ensuring second ≠ max or min
- Time complexity: **O(n)** — efficient for large arrays
- Returns `-Infinity`/`Infinity` if not found (e.g., all elements equal or length < 2)

---

