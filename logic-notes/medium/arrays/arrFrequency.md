# Count Frequency of Each Element in an Array

- This function counts how many times each element appears in the array.

---

```js
function countFrequency(arr) {
  const freq = {}; // object to store frequency counts
  for (let num of arr) {
    // increment count if exists, else initialize to 1
    freq[num] = (freq[num] || 0) + 1;
  }
  return freq; // return frequency map
}
```

---

## Example

```js
countFrequency([1, 2, 2, 3, 3, 3]);
```

---

## Notes

- Keys in the output object are strings (as all object keys are).
- Works for numbers, strings, and characters.
- Useful for histogram, mode, or frequency-based problems.

---