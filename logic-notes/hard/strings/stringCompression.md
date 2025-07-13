#  String Compression using Run-Length Encoding (RLE)

- This algorithm compresses a string by replacing **repeated consecutive characters** with the character followed by the number of repetitions.

---

```js
// Compresses string using Run-Length Encoding (RLE)
function compressString(str) {
  let result = ''; // Final compressed output
  let count = 1;   // Count occurrences of each character
  // Start from 1 and compare each character with the previous one
  for (let i = 1; i <= str.length; i++) {
    // If current char is same as previous, increment count
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      // Append previous character and its count
      result += str[i - 1] + count;
      count = 1; // Reset count for new character
    }
  }
  return result;
}
```

---

##  Example

```js
compressString("aaabbcaaa"); 
compressString("abcd");      
```

---

##  Logic

- Iterate through the string from index 1.
- Count repeated characters (`count`).
- When a different character is found:
  - Append `previous character + count` to result.
  - Reset count.
- The loop goes up to `i <= str.length` to capture the last group.

---

##  Time & Space Complexity

| Metric        | Value     |
|---------------|-----------|
| Time          | O(n)      |
| Space         | O(n)      |

---

##  Tips

- For input like `"abcd"`, the result becomes `"a1b1c1d1"` — **you may check if compressed string is shorter** before using it.
- You can return the original string if `compressed.length >= original.length` (optional enhancement).

---