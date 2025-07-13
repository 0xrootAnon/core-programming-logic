# Iterative Binary Search (Sorted Array)

- This function performs binary search on a sorted array to find the index of a target element.

---

```js
// binary search: returns index of target if found, else -1
function binarySearch(arr, target) {
  let low = 0, high = arr.length - 1; // define search range
  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // calculate mid index
    if (arr[mid] === target) return mid;        // target found
    if (arr[mid] < target) low = mid + 1;       // search right half
    else high = mid - 1;                        // search left half
  }
  return -1; // target not found
}
```

---

## Example

```js
binarySearch([1, 3, 5, 7, 9], 5); 
binarySearch([1, 3, 5, 7, 9], 6); 
```

---

## Notes

- Works only on **sorted arrays**.
- Time complexity: **O(log n)**
- Space complexity: **O(1)** (iterative, no recursion stack)

---