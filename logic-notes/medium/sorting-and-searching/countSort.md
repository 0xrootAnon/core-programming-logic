#  Count Sort (Non-Comparison Sorting)

Count Sort is an efficient, non-comparison-based sorting algorithm used when:
- All elements are **non-negative integers**
- The **maximum value** (`max`) is not too large

---

```js
// Count Sort implementation (assumes non-negative integers)
function countSort(arr) {
  const max = Math.max(...arr);               // Find the maximum value
  const count = Array(max + 1).fill(0);       // Initialize count array of size max+1
  // Count frequency of each element
  for (let num of arr) count[num]++;
  const result = [];
  // Reconstruct the sorted array using the frequency array
  for (let i = 0; i <= max; i++) {
    while (count[i] > 0) {
      result.push(i);
      count[i]--;
    }
  }
  return result;
}
```

---

##  Example

```js
countSort([4, 2, 2, 8, 3, 3, 1]); 
```

---

##  Logic

1. **Find max**: Know the size of the count array
2. **Frequency count**: Count how many times each number appears
3. **Rebuild**: Use the count array to construct the sorted array

---

##  Time & Space Complexity

| Metric        | Value       |
|---------------|-------------|
| Time          | O(n + k)    | where `n` = input size, `k` = max element
| Space         | O(k)        |

---

##  Notes

- Only works for **integers ≥ 0**
- Not efficient if `max` is very large compared to `n`
- **Stable version** exists but needs index adjustments

---
