# Swapping Two Values Using a Temporary Variable

This code swaps the values of two variables `a` and `b` using a third variable called `temp`.

---
## Step-by-Step Explanation:

1. **Initial values:**
    a = 5
    b = 7

2. **Store `a` in `temp`:**
temp = 5 // saves original value of 'a'

3. **Assign `b` to `a`:**
a = 7 // value of 'b' is now assigned to 'a'

4. **Assign `temp` to `b`:**
b = 5 // original value of 'a' (from temp) is now assigned to 'b'

---

### Why Use `temp`?
Without using a temporary variable:
- The **original value of `a` would be lost** when it's overwritten by the value of `b`.

By introducing a `temp` variable:
- We create a **safe backup** of `a` before changing it.
- This ensures the **swap is accurate and secure**.

**`temp` acts as **temporary storage** that makes the swap process reliable.**

---

### Code:

```js
// Swapping values of two variables using a third temporary variable
let a = 5;
let b = 7;
let temp = a;  // store value of 'a' in 'temp'
a = b;         // assign value of 'b' to 'a'
b = temp;      // assign original value of 'a' (stored in temp) to 'b'
console.log("a =", a);  // Output: a = 7
console.log("b =", b);  // Output: b = 5
