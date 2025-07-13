# Remove Duplicates from an Array

- This script removes duplicate elements from an array using both `Set` and manual map-based approaches.

---

## method 1: using Set (quick & clean)

```js
function removeDuplicatesSet(arr) {
  return [...new Set(arr)]; // Set keeps only unique values
}
```

### Example

```js
removeDuplicatesSet([1, 2, 2, 3, 1]); 
```

---

## method 2: manual lookup using object

```js
// 
function removeDuplicatesManual(arr) {
  const seen = {};         // to track seen elements
  const result = [];       // to store unique values
  for (let num of arr) {
    if (!seen[num]) {
      result.push(num);    // add to result if not seen
      seen[num] = true;    // mark as seen
    }
  }
  return result;
}
```

### Example

```js
removeDuplicatesManual([4, 5, 4, 6]); 
```

---

## Notes

- Both methods **preserve order of first occurrence**.
- Method 1 is concise and preferred for modern use.
- Method 2 is flexible and can be modified (e.g. for case-insensitive deduplication).

---