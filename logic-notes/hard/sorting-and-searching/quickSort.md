#  Quick Sort (Divide and Conquer)

**Quick Sort** is a highly efficient, divide-and-conquer sorting algorithm that works by selecting a *pivot* and partitioning the array into subarrays of elements less than and greater than the pivot.

---

```js
// Recursive Quick Sort function
function quickSort(arr) {
  // Base case: an array of 0 or 1 elements is already sorted
  if (arr.length <= 1) return arr;
  // Choose pivot (last element here)
  const pivot = arr[arr.length - 1];
  // Arrays to hold elements smaller and greater than pivot
  const left = [], right = [];
  // Partition the array
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  // Recursively sort left and right, and combine with pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}
```

---

##  Example

```js
quickSort([5, 2, 8, 1, 4]);
```

---

##  How It Works

1. **Choose a Pivot**: We pick the last element as the pivot.
2. **Partition**: Place smaller elements in `left`, larger in `right`.
3. **Recurse**: Apply quickSort to `left` and `right` parts.
4. **Combine**: Return the sorted result as `[sortedLeft, pivot, sortedRight]`.

---

##  Time and Space Complexity

| Case       | Time      | Space     |
|------------|-----------|-----------|
| Best / Avg | O(n log n)| O(log n)* |
| Worst      | O(n²)     | O(n)*     |

> *Space is O(n) in this implementation (due to array copies), but can be optimized with in-place sorting.*

---

##  Notes

- **Not a stable sort** (equal elements may not preserve order)
- Worst case occurs when pivot is the smallest/largest element every time
- Can be optimized using:
  - **Randomized Pivot**
  - **Median-of-three**
  - **Tail recursion removal**

---

##  Use Cases

- Fast, general-purpose sorting
- Often used in system libraries due to low overhead and average-case speed

---