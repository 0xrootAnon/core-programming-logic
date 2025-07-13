# First Non-Repeating Character in a Stream

This algorithm processes a character stream and tracks the **first non-repeating character** at each step.

---

## Code

```js
function firstNonRepeating(stream) {
  const freq = {}, q = [], res = [];
  for (let ch of stream) {
    freq[ch] = (freq[ch] || 0) + 1; // Count frequency
    q.push(ch); // Add to queue
    // Remove repeating characters from front
    while (q.length && freq[q[0]] > 1) {
      q.shift();
    }
    // Append first non-repeating or '#' if none
    res.push(q[0] || '#');
  }
  return res.join('');
}
```

---

##  Logic Explained

1. `freq`: Object to track frequency of each character.
2. `q`: Acts like a queue — stores potential non-repeating characters.
3. `res`: Final result array that collects answers at each step.

---

##  Example

```js
firstNonRepeating("aabc")
```

**Step-by-step:**

| Char | Queue   | Freq            | Output |
|------|---------|------------------|--------|
| a    | [a]     | {a: 1}           | a      |
| a    | [a, a]  | {a: 2}           | #      |
| b    | [a, a, b] | {a: 2, b: 1}   | b      |
| c    | [a, a, b, c] | {a: 2, b: 1, c: 1} | b  |

**Result:** `'a#bb'`

---

##  Time & Space Complexity

| Operation           | Complexity |
|---------------------|------------|
| Time                | O(n)       |
| Space               | O(1) (fixed alphabet) |

---

