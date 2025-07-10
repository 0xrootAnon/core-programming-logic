# Power of a Number 

This document explains **multiple ways to calculate the power of a number** in JavaScript (`base^exponent`), ranging from built-in methods to manual logic using loops and recursion.

---

##  What is "Power"?

The **power of a number** (also called **exponentiation**) means multiplying the base by itself a number of times.

> For example, `2^3 = 2 × 2 × 2 = 8`  
> `2^-3 = 1 / (2^3) = 1/8 = 0.125`

---

### Method 1: Using `Math.pow(base, exponent)`

```js
const result1 = Math.pow(2, 3);  // 2^3 = 8
console.log("Math.pow():", result1); // Output: 8
```
**Explanation:** Math.pow() is a built-in JavaScript method. It takes two arguments:
First: the base;
Second: the exponent;
Returns: base raised to the exponent;

---

### Method 2: Using ** (Exponentiation Operator)

```js
const result2 = 2 ** 3;  // 2 raised to the power 3
console.log("Exponentiation (**):", result2); // Output: 8
```
**Explanation:** Introduced in ES6 (ECMAScript 2015). Cleaner and more readable than Math.pow(). Works the same way: base ** exponent.

---

### Method 3: Manual Loop-Based Implementation

```js
function powerLoop(base, exponent) {
  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result *= base;
  }
  return result;
}
console.log("Loop method:", powerLoop(2, 3)); // Output: 8
```

**Explanation:** Uses a for loop to multiply base by itself exponent times. Starts from 1 and multiplies result *= base in each iteration. Good for logic building and interview questions.

---

### Method 4: Recursive Implementation

```js
function powerRecursive(base, exponent) {
  if (exponent === 0) return 1;              // base^0 = 1
  return base * powerRecursive(base, exponent - 1);
}
console.log("Recursive method:", powerRecursive(2, 3)); // Output: 8
```

**Explanation:** A recursive function calls itself until a base condition is met. If exponent is 0, return 1 (any number to the power 0 is 1). Otherwise, keep calling powerRecursive with a reduced exponent.
**Note: Avoid recursion for very large exponents to prevent stack overflow.*

---

### Method 5: Handling Negative Exponents using **

```js
const result5 = 2 ** -3; // 1 / (2^3) = 1/8
console.log("Negative exponent (**):", result5); // Output: 0.125
```

**Explanation:** When the exponent is negative, it means 1 / (base^abs(exponent)). The ** operator handles this automatically. 2 ** -3 is equivalent to 1 / (2 * 2 * 2) = 0.125.

