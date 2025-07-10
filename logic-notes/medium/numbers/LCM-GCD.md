# GCD & LCM Methods as used in "LCM-GCD.js"

This guide documents all possible logic to calculate GCD (Greatest Common Divisor) and LCM (Least Common Multiple) using JavaScript, along with clear explanations for each method.

---

## **GCD Methods**

### Method 1: GCD by brute force

**Loops from 1 to the minimum of a and b*
**Checks which number divides both a and b, and keeps the greatest one*

```js
function gcdBrute(a, b) {
  let gcd = 1; // will store the greatest common divisor
  const min = Math.min(a, b); // find the smaller number between a and b
  for (let i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) { // if 'i' divides both a and b
      gcd = i; // update gcd to current value
    }
  }
  return gcd; // return the greatest common divisor
}
```
---

### Method 2: GCD by Euclidean Algorithm (Recursive)

**Uses the formula: gcd(a, b) = gcd(b, a % b)*

```js
function gcdRecursive(a, b) {
  return b === 0 ? a : gcdRecursive(b, a % b); // base case: if b is 0, return a
}
```

---

### Method 3: GCD by Euclidean Algorithm (Iterative version)

**Same logic as above but uses a loop instead of recursion*

```js
function gcdIterative(a, b) {
  while (b !== 0) {
    const temp = b; // store b temporarily
    b = a % b;      // update b to remainder
    a = temp;       // update a to previous b
  }
  return a; // when b becomes 0, a is the gcd
}
```

---

### Method 4: GCD of an array

**Uses Array.prototype.reduce() to apply gcd on all elements*

```js
function gcdArray(arr) {
  return arr.reduce((acc, val) => gcdRecursive(acc, val)); // reduce combines elements two at a time using gcd
}
```

---

### Method 5: GCD using Binary GCD (Stein's Algorithm)

**Efficient bitwise version, works faster on binary systems*

```js
function binaryGCD(a, b) {
  if (a === b) return a;           // base case: both numbers are equal
  if (a === 0) return b;           // if a is 0, gcd is b
  if (b === 0) return a;           // if b is 0, gcd is a
  // if both a and b are even
  if ((a & 1) === 0 && (b & 1) === 0) {
    return binaryGCD(a >> 1, b >> 1) << 1; // divide both by 2 and multiply result by 2
  }
  // if a is even
  else if ((a & 1) === 0) {
    return binaryGCD(a >> 1, b); // divide a by 2
  }
  // if b is even
  else if ((b & 1) === 0) {
    return binaryGCD(a, b >> 1); // divide b by 2
  }
  // both are odd
  else {
    return a > b ? binaryGCD((a - b) >> 1, b) : binaryGCD((b - a) >> 1, a); // subtract smaller from larger and divide by 2
  }
}
```

---

## **LCM methods**

### Method 1: LCM by brute force

**Start from the larger of the two numbers and increment until you find a number divisible by both*

```js
function lcmBrute(a, b) {
  let max = Math.max(a, b); // start from the max of a and b
  while (true) {
    if (max % a === 0 && max % b === 0) return max; // if divisible by both
    max++; // try next number
  }
}
```

---

### Method 2: LCM using GCD

**Formula: LCM(a, b) = (a * b) / GCD(a, b)*

```js
function lcmFromGcd(a, b) {
  return (a * b) / gcdRecursive(a, b);
}
```

---

### Method 3: LCM of an array

**Uses reduce to calculate lcm for all array elements*

```js
function lcmArray(arr) {
  return arr.reduce((acc, val) => lcmFromGcd(acc, val));
}
```

---

### Method 4: LCM using recursion (for array)

**Recursively combine elements using lcm*

```js
function lcmRecursive(arr, index = 0) {
  if (arr.length === 1) return arr[0]; // base case for single element
  if (index === arr.length - 1) return arr[index]; // reached end
  return lcmFromGcd(arr[index], lcmRecursive(arr, index + 1));
}
```
