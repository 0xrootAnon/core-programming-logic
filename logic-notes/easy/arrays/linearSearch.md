# Linear Search in an Array

- This function searches for a target element in an array using the linear search technique.

--- 

```js
//linear search simply means finding index of target in array
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i; // if found, return index
  }
  return -1; // if not found, return -1
}
```

---

## Example

```js
linearSearch([10, 20, 30, 40], 30); // Output: 2
linearSearch([1, 2, 3], 5);         // Output: -1
```

---

## Notes

- Time complexity: O(n)
- Works on unsorted arrays
- Returns the index of the first match, or `-1` if not found

---
