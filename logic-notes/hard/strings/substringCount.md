#  Substring Count / Pattern Search (Brute Force)

- This function counts how many times a given **pattern** appears in a **string**, using a simple **brute-force approach**.

---

```js
// Count number of times `pattern` appears in `str`
function countSubstring(str, pattern) {
  let count = 0;
  // Loop from 0 to str.length - pattern.length
  for (let i = 0; i <= str.length - pattern.length; i++) {
    // Extract substring of pattern's length and compare
    if (str.substring(i, i + pattern.length) === pattern) {
      count++;
    }
  }
  return count;
}
```

---

##  Example

```js
countSubstring("ababab", "ab");  
countSubstring("aaaaa", "aa");   
countSubstring("hello", "ll");  
```

---

##  Logic Explanation

- We loop through each possible starting index `i` of the string where a full pattern could still fit.
- `substring(i, i + pattern.length)` extracts a slice of the same length as the pattern.
- If it matches the pattern, increment the count.

---

##  Time & Space Complexity

| Metric        | Value       |
|---------------|-------------|
| Time          | O(n * m)    | where `n` = length of string, `m` = length of pattern  
| Space         | O(1)        |

---

##  Note

This method:
- Works fine for small inputs.
- Is inefficient for very large strings or repeated searches.

For optimization, consider:
- **KMP Algorithm**
- **Rabin-Karp**
- **Z-algorithm**

---

