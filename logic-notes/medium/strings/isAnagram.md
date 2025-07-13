# Anagram Check 

- This script checks if two strings are anagrams of each other using two different approaches.

---

## Method 1: sort and compare

```js
function isAnagram(a, b) {
  const format = s =>
    s.toLowerCase()              // convert to lowercase
     .replace(/[^a-z]/g, '')     // remove non-letter characters
     .split('')                  // convert to array of characters
     .sort()                     // sort alphabetically
     .join('');                  // convert back to string
  return format(a) === format(b); // compare normalized versions
}
```

### Example

```js
isAnagram("Listen", "Silent"); // true
```

---

## Method 2: frequency count (map-based)

```js
function isAnagramMap(a, b) {
  if (a.length !== b.length) return false; // early exit if lengths differ
  const freq = {}; // store frequency of characters from string a
  for (let char of a) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let char of b) {
    if (!freq[char]) return false; // char missing or extra
    freq[char]--; // match and reduce count
  }
  return true; // all characters matched
}
```

### Example

```js
isAnagramMap("race", "care"); // true
```

---

## Notes

- **Method 1** is simpler and handles spacing/punctuation automatically.
- **Method 2** is faster (no sorting), but doesn't ignore non-letter characters or case, you'd need to normalize both inputs manually.
- Use `.toLowerCase()` and `.replace()` in method 2 if needed.

---

