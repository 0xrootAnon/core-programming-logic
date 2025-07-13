# Strong Number & Perfect Number Check

This script includes two different mathematical checks:
- Whether a number is a **Strong Number**
- Whether a number is a **Perfect Number**

---

##  Strong Number

A number is **strong** if the **sum of the factorials of its digits** equals the number itself.

###  Example:
- 145 → 1! + 4! + 5! = 1 + 24 + 120 = 145 

```js
function isStrongNumber(n) {
  const fact = [1]; // precompute factorials from 0! to 9!
  for (let i = 1; i <= 9; i++) fact[i] = fact[i - 1] * i;
  let sum = 0, temp = n;
  while (temp > 0) {
    sum += fact[temp % 10];        // add factorial of last digit
    temp = Math.floor(temp / 10);  // remove last digit
  }
  return sum === n;
}
```

---

##  Perfect Number

A number is **perfect** if the **sum of all its proper divisors** (excluding itself) equals the number.

###  Example:
- 28 → 1 + 2 + 4 + 7 + 14 = 28 

### Code:

```js
function isPerfectNumber(n) {
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) sum += i; // add proper divisor
  }
  return sum === n;
}
```

---

##  Notes

- **Strong numbers are rare** (e.g. 1, 2, 145).
- **Perfect numbers are rare** too (e.g. 6, 28, 496, 8128).
- Time complexity:
  - Strong: O(d), where d = number of digits
  - Perfect: O(n)

---
