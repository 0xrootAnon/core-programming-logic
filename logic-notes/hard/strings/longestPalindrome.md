#  Longest Palindromic Substring

- This algorithm finds the **longest palindromic substring** in a given string using the **"expand around center"** technique. It efficiently checks all possible centers and expands outward to find palindromes.

---

```js
// Function to find the longest palindromic substring
function longestPalindromicSubstring(s) {
  let start = 0, end = 0; // To store the indices of the longest palindrome
  // Helper function to expand around the center
  const expand = (l, r) => {
    // Expand as long as the characters match and are in bounds
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    // Return the final valid palindrome boundaries
    return [l + 1, r - 1];
  };
  // Loop through each index as potential center
  for (let i = 0; i < s.length; i++) {
    let [l1, r1] = expand(i, i);     // Odd-length palindromes
    let [l2, r2] = expand(i, i + 1); // Even-length palindromes
    // Update the longest found palindrome
    if (r1 - l1 > end - start) [start, end] = [l1, r1];
    if (r2 - l2 > end - start) [start, end] = [l2, r2];
  }
  // Return the longest palindromic substring
  return s.slice(start, end + 1);
}
```

---

##  Example

```js
longestPalindromicSubstring("babad"); // "bab" or "aba"
longestPalindromicSubstring("cbbd");  // "bb"
```

---

##  Logic Explanation

- A palindrome mirrors around its center.
- There are `2n - 1` possible centers in a string of length `n` (each character and each gap between characters).
- Expand from each center and track the **maximum length substring** seen so far.

---

##  Time & Space Complexity

| Metric        | Value     |
|---------------|-----------|
| Time          | O(n²)     |
| Space         | O(1)      |

> We check every possible center and expand outward — quadratic in worst case, constant space.

---

##  Dry Run (for "babad")

- Center at `i=0`: expand → `"b"`
- Center at `i=1`: expand → `"bab"`
- Center at `i=2`: expand → `"aba"`
- Longest: `"bab"` or `"aba"`

---

##  Best For

- Interview-friendly solution
- Efficient for small to mid-size strings
- Great for understanding center-expansion strategies

---