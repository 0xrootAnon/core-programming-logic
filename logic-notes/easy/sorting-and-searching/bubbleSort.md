# Bubble Sort

- This function implements the **Bubble Sort** algorithm to sort an array in ascending order.

---

## How Bubble Sort Works

- Repeatedly steps through the array
- Compares each pair of adjacent elements
- Swaps them if they are in the wrong order
- Larger elements "bubble up" to the end

---

```js
// bubble sort: sorts an array in ascending order
function bubbleSort(arr) {
  let n = arr.length;
  // Outer loop for each pass
  for (let i = 0; i < n - 1; i++) {
    // Inner loop for comparison and swapping
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap arr[j] and arr[j + 1]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr; // return the sorted array
}
```

---

## Example

```js
bubbleSort([5, 3, 8, 4, 2]); 
```

---

## Notes

- Time Complexity:  
  - Worst & Average: **O(n²)**  
  - Best (already sorted): **O(n)** with optimization (not included here)
- Space Complexity: **O(1)** (in-place sorting)
- Simple but inefficient for large datasets

---

