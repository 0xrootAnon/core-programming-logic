# 📦Factorial of a Number

- What is a Factorial?
-The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.

-It is denoted by:
**n! = n × (n - 1) × (n - 2) × ... × 3 × 2 × 1**

---

##  Method 1: For Loop

```js
function factorialForLoop(n) {
  let result = 1;
  // Start loop from 2 because multiplying by 1 is redundant
  for (let i = 2; i <= n; i++) {
    result *= i; // multiply result by current i
  }
  return result;
}
```

---

## Method 2: While Loop

-Great for condition-controlled iteration

```js
function factorialWhileLoop(n) {
  let result = 1;
  let i = 2;
  // Run the loop while i <= n
  while (i <= n) {
    result *= i; // multiply result by i
    i++; // increment i
  }
  return result;
}
```

---

## Method 3: Do...While Loop

- Useful when we want the loop to run at least once

```js
function factorialDoWhileLoop(n) {
  let result = 1;
  let i = 2;
  if (n === 0) return 1; // Edge case: 0! = 1
  do {
    result *= i; // multiply result by i
    i++; // increment i
  } while (i <= n); // condition checked after loop body
  return result;
}
```

---

## Method 4: Precomputed Table (Lookup Table)

- Very fast O(1) access to factorials up to 100

```js
const factorialTable = (() => {
  const fact = [1]; // Initialize array with 0! = 1
  for (let i = 1; i <= 100; i++) {
    fact[i] = fact[i - 1] * i; // Build factorials iteratively
  }
  return fact;
})();
// Function to return factorial from the precomputed table
function factorialFromTable(n) {
  return factorialTable[n]; // Direct access in O(1)
}
```

---


## Method 5: BigInt Factorial

- Used for very large numbers (beyond 64-bit safe limit)

```js
function factorialBigInt(n) {
  let result = 1n; // Use BigInt literal with 'n'
  for (let i = 2n; i <= BigInt(n); i++) {
    result *= i; // Multiply using BigInt
  }
  return result;
}
```

---

### Method Comparison Summary 

| Method                         | Loop Type       | Time     | Space   | Best For                        |
|-------------------------------|------------------|----------|---------|---------------------------------|
| Method 1: For Loop            | Iterative        | O(n)     | O(1)    | Simple, fast, structured logic |
| Method 2: While Loop          | Iterative        | O(n)     | O(1)    | Condition-driven logic         |
| Method 3: Do...While Loop     | Iterative        | O(n)     | O(1)    | At-least-one-run situations    |
| Method 4: Precomputed Table   | Lookup (No loop) | O(1)     | O(n)    | Constant-time factorial fetch  |
| Method 5: BigInt              | Iterative        | O(n)     | O(1)    | Very large factorials (n > 100)|
