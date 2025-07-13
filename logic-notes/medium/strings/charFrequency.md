# Frequency Count of Characters

- This function counts how many times each character appears in a given string.

---

## Code with Comments

```js
// count frequency of each character in the string
function charFrequency(str) {
  const freq = {}; // empty object to store character counts
  for (let char of str) {
    // if char already exists, increment count; else initialize with 1
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}
```

---

### Example

```js
console.log(charFrequency("hello"));
```

---

## Notes

- Works for all characters: letters, digits, symbols, spaces.
- Case-sensitive: `'A'` and `'a'` are treated as different keys.
- Output is an object where keys = characters and values = their count.

---
