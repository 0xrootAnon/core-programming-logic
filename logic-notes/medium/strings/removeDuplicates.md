# Remove Duplicate Characters 

- This script removes duplicate characters from a string using two approaches.

---

## Method 1: Using Set

```js
function removeDuplicates(str) {
  // Set stores only unique values
  return [...new Set(str)].join('');
}
```

### Example

```js
removeDuplicates("aabbcc"); 
```

---

## Method 2: Manual loop with Lookup
```js
function removeDuplicatesManual(str) {
  let seen = {};     // to track already seen characters
  let result = '';   // build result string without duplicates
  for (let char of str) {
    if (!seen[char]) {      // if character not seen before
      result += char;       // add to result
      seen[char] = true;    // mark as seen
    }
  }
  return result;
}
```

### Example

```js
removeDuplicatesManual("banana"); 
```

---

## Notes

- **Method 1** is shorter and leverages `Set` for uniqueness.
- **Method 2** gives more control and can be adapted for case-insensitive or filtered removal.
- Both preserve the order of first occurrence.

---
