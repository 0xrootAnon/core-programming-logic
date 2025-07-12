# Nth Fibonacci - Loop & DP Techniques

- This document explains 5 different methods to calculate the **Nth Fibonacci number** using loops and dynamic programming techniques in JavaScript. Each method is suited for different use-cases like readability, performance, or memory optimization.

---

##  Fibonacci Series Overview

- The Fibonacci sequence is defined as:

F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2) for n > 1

---

##  Method 1: For Loop (Bottom-Up Iterative)

```js
function fibForLoop(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
```

- Explanation: Uses two variables to iteratively compute Fibonacci numbers from index 2 up to n. **a stores F(n-2), b stores F(n-1).* At each step, we update a and b to move forward in the series.

---

## Method 2: While Loop

```js
function fibWhileLoop(n) {
  if (n <= 1) return n;
  let a = 0, b = 1, i = 2;
  while (i <= n) {
    const temp = a + b;
    a = b;
    b = temp;
    i++;
  }
  return b;
}
```

- Explanation: Similar to Method 1 but uses a while loop instead of for.

---

## Method 3: Do...While Loop

```js
function fibDoWhileLoop(n) {
  if (n <= 1) return n;
  let a = 0, b = 1, i = 2;
  do {
    const temp = a + b;
    a = b;
    b = temp;
    i++;
  } while (i <= n);
  return b;
}
```

- Explanation: This loop runs at least once due to the nature of do...while. Useful when you want to ensure the loop body runs at least once.

---

## Method 4: Dynamic Programming Array (Tabulation)

```js
function fibDPArray(n) {
  if (n <= 1) return n;
  const dp = Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
```

- Explanation: Builds the entire Fibonacci table (array) from the bottom. Useful when you want to keep track of all intermediate values (e.g., for debugging or visualization).

---

## Method 5: 2-Element Array Rotation (Space Optimized)

```js
function fibOptimizedArray(n) {
  if (n <= 1) return n;
  const fibs = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibs[i % 2] = fibs[0] + fibs[1];
  }
  return fibs[n % 2];
}
```

- Explanation: Rotates just two array slots using modulo indexing. Achieves the same result as DP with significantly less memory.

---

##  Method Comparison Table

| Method                      | Loop Type        | Time     | Space   | Best For                            |
|----------------------------|------------------|----------|---------|--------------------------------------|
| Method 1: For Loop          | Iterative        | O(n)     | O(1)    | Simple, fast, readable               |
| Method 2: While Loop        | Iterative        | O(n)     | O(1)    | Condition-driven iteration           |
| Method 3: Do...While Loop   | Iterative        | O(n)     | O(1)    | At-least-one execution scenarios     |
| Method 4: DP Array          | Bottom-Up DP     | O(n)     | O(n)    | Visualization, teaching, debugging   |
| Method 5: Optimized Array   | Iterative + mod  | O(n)     | O(1)    | Memory-constrained environments      |

---

##  Conclusion

Each method solves the same problem but emphasizes different tradeoffs in **readability**, **performance**, or **space usage**.  
Pick the method that best fits your use case.

---