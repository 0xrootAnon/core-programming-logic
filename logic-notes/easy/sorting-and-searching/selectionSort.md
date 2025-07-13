# Selection Sort

- This function implements the **Selection Sort** algorithm to sort an array in ascending order.

---

##  How Selection Sort Works

- Repeatedly selects the **smallest element** from the unsorted portion of the array
- Places it at the beginning of the unsorted section
- Continues until the entire array is sorted

---

```js
// selection sort: sorts array in ascending order
function selectionSort(arr) {
  let n = arr.length;
  // Outer loop moves the boundary of unsorted subarray
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i; // assume current index has the minimum
    // Inner loop to find the actual minimum in remaining array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    // Swap only if a smaller element was found
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr; // return the sorted array
}
```

---

## Example

```js
selectionSort([64, 25, 12, 22, 11]); 
```

---

## Notes

- Time Complexity: **O(n²)** in all cases
- Space Complexity: **O(1)** (in-place)
- Always makes **n−1 swaps**, even if already sorted
- Simpler than Bubble Sort but not faster for large data

---