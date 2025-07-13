#  Balanced Parentheses Checker

This code checks whether a string expression has **balanced brackets** using two methods: stack-based (universal) and counter-based (only for `()`).

---

##  Code

```js
// 🔹 Method A: Stack-based (handles (), {}, [])
function isBalanced(expr) {
  const st = [];
  const pairs = { ')': '(', '}': '{', ']': '[' };
  for (let ch of expr) {
    if ('([{'.includes(ch)) {
      st.push(ch); // Push opening brackets
    } else if (')]}'.includes(ch)) {
      if (st.pop() !== pairs[ch]) return false; // Match with top
    }
  }
  return st.length === 0; // True if all matched
}
```

```js
// 🔸 Method B: Counter-only (works only for '()')
function isBalancedCount(expr) {
  let c = 0;
  for (let ch of expr) {
    if (ch === '(') c++;      // Increment for opening
    else if (ch === ')') c--; // Decrement for closing
    if (c < 0) return false;  // Early return on unmatched ')'
  }
  return c === 0; // Final count should be zero
}
```

---

##  Logic Summary

| Method   | Use Case                | Supports          | Data Structure | Performance |
|----------|-------------------------|-------------------|----------------|-------------|
| Stack    | All types of brackets   | `()`, `{}`, `[]`  | Stack (`[]`)   | O(n)        |
| Counter  | Only `()` balance check | Only `(` and `)`  | Integer counter| O(n)        |

---

##  Examples

```js
isBalanced("({[]})")       
isBalanced("{(})")         
isBalancedCount("(()())")  
isBalancedCount("(()")     
```

---
