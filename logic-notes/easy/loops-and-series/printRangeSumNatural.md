#  Sum of First N Natural Numbers 

- This file demonstrates multiple ways to calculate the sum of first `n` natural numbers using different looping techniques and recursion.

---

##  Method 1: Using Mathematical Formula

```js
let n0 = 10;
let sum0 = (n0 * (n0 + 1)) / 2;
console.log("Sum using formula:", sum0);
```

 Logic: Using formula is the most efficient approach
**Formula:** **Sum = n × (n + 1) / 2*

---

## Method 2: Using for Loop

```js
let n1 = 10;
let sum1 = 0;
for (let i = 1; i <= n1; i++) {
  sum1 += i;
}
console.log("Sum using for loop:", sum1);
```

 Logic: Initialize sum1 = 0; Start from i = 1 to n1; Keep adding i to sum1 on each iteration;

---

## Method 3: Using while Loop

```js
let n2 = 10;
let i2 = 1;
let sum2 = 0;
while (i2 <= n2) {
  sum2 += i2;
  i2++;
}
console.log("Sum using while loop:", sum2);
```

Logic: Same logic as for loop, just using while

---

## Method 4: Using do...while Loop

```js
let n3 = 10;
let i3 = 1;
let sum3 = 0;
do {
  sum3 += i3;
  i3++;
} while (i3 <= n3);
console.log("Sum using do-while loop:", sum3);
```

 Logic: Loop runs at least once; Good when you need the body to execute before the condition check

---

## Method 5: Using Recursion

```js
function recursiveSum(n) {
  if (n === 0) return 0;             // base case: sum of 0 is 0
  return n + recursiveSum(n - 1);    // recursive call with n-1
}
console.log("Sum using recursion:", recursiveSum(10));
```

 Logic: Base case: when n is 0, return 0; Recursive step: return n + sum(n - 1)

**Caution: not memory-efficient for large n**

---

##  Summary

| Method         | Code Type    | Performance   | Readability | Use Case                            |
|----------------|--------------|---------------|-------------|-------------------------------------|
| Formula        | Constant time|  Fastest     |  Easiest   | When you just need the sum          |
| For Loop       | Iterative    | Fast          |  Easy      | Classic beginner method             |
| While Loop     | Iterative    | Fast          |  Easy      | Good for conditional loops          |
| Do-While Loop  | Iterative    | Fast          |  Easy      | Useful when loop must run once      |
| Recursion      | Recursive    | Slower        |  Moderate  | Learning recursion concepts         |
