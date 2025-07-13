# Insertion Sort (Comparison-based Sorting)

- Insertion Sort builds a sorted array one element at a time, placing each new element in its correct position relative to the elements before it.

---

```js
// Insertion Sort: sorts array in-place
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];      // Current element to insert
    let j = i - 1;
    // Shift elements greater than `key` to the right
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    // Insert `key` at its correct position
    arr[j + 1] = key;
  }
  return arr;
}
```

---

##  Example

```js
insertionSort([5, 3, 1, 4, 2]); 
```

---

##  Logic

- Start from index `1` (second element)
- Compare it with the previous sorted part (`arr[0...i-1]`)
- Shift larger elements to the right
- Insert `key` at the correct index

---

##  Time & Space Complexity

| Scenario     | Time       |
|--------------|------------|
| Best Case    | O(n)       | (Already sorted)
| Average Case | O(n²)      |
| Worst Case   | O(n²)      |
| Space        | O(1)       | In-place sorting

---

##  Use When:

- Small datasets
- Partially sorted data
- Simplicity matters over performance

---