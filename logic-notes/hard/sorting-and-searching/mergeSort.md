#  Merge Sort (Divide and Conquer)

**Merge Sort** is a classic, efficient, divide-and-conquer sorting algorithm. It breaks down the array into smaller subarrays, sorts them, and merges the sorted subarrays to produce the final sorted array.

---

```js
// Main mergeSort function
function mergeSort(arr) {
  // Base case: if array has 1 or no element, it's already sorted
  if (arr.length <= 1) return arr;
  // Step 1: Divide the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid)); // recursively sort left half
  const right = mergeSort(arr.slice(mid));   // recursively sort right half
  // Step 2: Merge the sorted halves
  return merge(left, right);
}
// Merge two sorted arrays into a single sorted array
function merge(left, right) {
  let result = [], i = 0, j = 0;
  // Compare elements from both arrays and merge in sorted order
  while (i < left.length && j < right.length) {
    result.push(left[i] <= right[j] ? left[i++] : right[j++]);
  }
  // Append any remaining elements
  return result.concat(left.slice(i)).concat(right.slice(j));
}
```

---

##  Example

```js
mergeSort([5, 2, 8, 1, 4]);
```

---

##  How It Works

1. **Divide:** Recursively split the array into halves until each subarray has only one element.
2. **Conquer:** Merge the subarrays back in sorted order using the `merge()` helper.
3. **Combine:** Return the final merged and sorted array.

---

##  Time and Space Complexity

| Complexity | Value     |
|------------|-----------|
| Time       | O(n log n) |
| Space      | O(n)       |

- Always O(n log n) — better than bubble/selection/insertion sort for large arrays.

---

##  Stable Sort?

Yes. Merge Sort preserves the order of equal elements (important for sorting objects by keys).

---

##  Use Cases

- Sorting large datasets
- External sorting (e.g. data too big to fit into memory)
- When **stable sort** is required

---
