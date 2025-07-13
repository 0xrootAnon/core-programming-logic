#  Infix to Postfix (Shunting Yard Algorithm)

This function converts an **infix arithmetic expression** (like `A + B * C`) to **postfix notation** (like `A B C * +`), using operator precedence.

---

##  Code

```js
function infixToPostfix(expr) {
  const prec = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 }; // Operator precedence
  const out = [], st = [];
  for (let ch of expr.replace(/\s+/g, '')) {
    if (/\w/.test(ch)) {
      out.push(ch); // If operand, push to output
    } else if ('+-*/^'.includes(ch)) {
      while (st.length && prec[st[st.length - 1]] >= prec[ch]) {
        out.push(st.pop()); // Pop operators with higher/equal precedence
      }
      st.push(ch); // Push current operator to stack
    }
  }
  while (st.length) out.push(st.pop()); // Pop remaining operators
  return out.join(' ');
}
```

---

##  Logic Summary

| Step | Logic |
|------|-------|
| Remove spaces | `expr.replace(/\s+/g, '')` cleans input |
| Operands | Alphanumeric characters (e.g., `A`, `B`) go directly to output |
| Operators | Use precedence to manage stack and output |
| Final step | Pop remaining operators into the output |

---

##  Example

```js
infixToPostfix("A + B * C")       
infixToPostfix("a + b * c - d")  
```

---

##  Note

- No parentheses handling included — add it for full functionality.
- Output is space-separated postfix expression.

---
