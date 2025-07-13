# Digital Root of a Number

The **digital root** is the repeated sum of digits until a single-digit number is obtained.

---

##  Method 1: Recursive Sum of Digits

```js
//recursively add digits until a single digit remains
function digitalRoot(n) {
  if (n < 10) return n; // base case: already a single digit
  // convert number to string, split to digits, reduce to sum, recurse
  return digitalRoot(
    n.toString()
     .split('')
     .reduce((a, b) => +a + +b)
  );
}
```

### Example

```js
digitalRoot(9875); 
```

---

##  Method 2: Mathematical Shortcut

```js
//using modulo 9 trick
function digitalRootMath(n) {
  return n === 0 ? 0 : 1 + ((n - 1) % 9);
}
```

### Why This Works?

- Based on modulo 9 congruency in number theory.
- All numbers are congruent to the sum of their digits modulo 9.

### Example

```js
digitalRootMath(9875); 
```

---

##  Notes

- **Time Complexity:**
  - Recursive: O(log n) — based on digit length
  - Math Trick: O(1) — constant time
- Both return the same result, but method 2 is significantly faster.
