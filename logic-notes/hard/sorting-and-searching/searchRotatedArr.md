 #  Search in Rotated Sorted Array

- This problem is an extension of **Binary Search**, applied on a sorted array that has been rotated at some unknown pivot. We must identify which half is sorted and search accordingly.

---

```js
// Binary Search in Rotated Sorted Array
function searchRotatedArray(arr, target) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    // Target found at mid
    if (arr[mid] === target) return mid;
    //  Check if left half is sorted
    if (arr[low] <= arr[mid]) {
      // Target lies within the left half
      if (target >= arr[low] && target < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    //  Else, right half must be sorted
    else {
      // Target lies within the right half
      if (target > arr[mid] && target <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  // Target not found
  return -1;
}
```

---

##  Example

```js
searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 0); // Output: 4
searchRotatedArray([6, 7, 8, 1, 2, 3, 4], 3); // Output: 5
searchRotatedArray([1, 3], 0);               // Output: -1
```

---

##  Logic Explanation

- One half of the array (left or right) is always **sorted**.
- If the **left half** is sorted:
  - Check if the target lies within it.
  - If yes, shrink the right pointer; otherwise, go to right half.
- If the **right half** is sorted:
  - Check if the target lies within it.
  - If yes, move left pointer right; else, explore left half.

---

##  Time Complexity

| Case        | Time       |
|-------------|------------|
| Best        | O(1)       |
| Average     | O(log n)   |
| Worst       | O(log n)   |

>  Works even if the array is rotated multiple times

---

##  Assumption

- Input array is originally **sorted in ascending order** and then **rotated**.
- All elements are **distinct**.

---

## Related Topics

- Binary Search
- Pivot Search
- Search in Circular Arrays

---