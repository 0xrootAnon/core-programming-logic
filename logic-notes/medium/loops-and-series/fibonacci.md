#  Print Fibonacci Series Using All Possible Logics 

- This file demonstrates **8 different methods** to print the Fibonacci series, from beginner to advanced.

---

## What is Fibonacci?
- A Fibonacci series starts with 0 and 1, and each term after that is the sum of the previous two, as in :  0, 1, 1, 2, 3, 5, 8, 13, 21, ...

---

## Method 1: For Loop

```js
let n0 = 10; 
let a0 = 0, b0 = 1; 
console.log(a0); 
console.log(b0); 
for (let i0 = 2; i0 < n0; i0++) {   // Loop starts from 2 because 0 and 1 are already printed
  let next = a0 + b0; // next term is sum of previous two
  console.log(next);  // print current term
  a0 = b0;            // move window forward
  b0 = next;
}
```
---

## Method 2: While Loop

```js
let n1 = 10;
let a1 = 0, b1 = 1, count1 = 2; // count1 tracks printed terms
console.log(a1); 
console.log(b1); 
while (count1 < n1) {
  let next1 = a1 + b1;
  console.log(next1);
  a1 = b1;
  b1 = next1;
  count1++;
}
```

---

## Method 3: Do...While Loop

```js
let n2 = 10;
let a2 = 0, b2 = 1, count2 = 2;
console.log(a2); 
console.log(b2); 
do {
  let next2 = a2 + b2;
  console.log(next2);
  a2 = b2;
  b2 = next2;
  count2++;
} while (count2 < n2);
```

---

## Method 4: Recursion (Naive)

```js
// Classic recursive definition of Fibonacci
function fibonacci(n3) {
  if (n3 === 0) return 0;
  if (n3 === 1) return 1;
  return fibonacci(n3 - 1) + fibonacci(n3 - 2); // call itself
}
let terms0 = 10;
// Loop to print first 10 terms
for (let i = 0; i < terms0; i++) {
  console.log(fibonacci(i));
}
```

---

##Method 5: Recursion + Memoization

```js
// Cache previously computed results to speed up
const memo = {};
function fib(n) {
  if (n in memo) return memo[n];      // return from cache
  if (n <= 1) return n;               // base case
  return memo[n] = fib(n - 1) + fib(n - 2); // store and return
}
for (let i = 0; i < 10; i++) {
  console.log(fib(i));
}
```

---

## Method 6: Store Series in Array

```js
let nX = 10;
let fib0 = [0, 1]; // start array with first two terms
// Start loop from index 2
for (let iX = 2; iX < nX; iX++) {
  fib0[iX] = fib0[iX - 1] + fib0[iX - 2]; // build array
}
console.log(fib0.join(", ")); // print array as comma-separated
```

---

## Method 7: Destructuring (Last 2 Terms Only)

```js
let nY = 10;
let series = []; // to store result
let a = 0, b = 1;
for (let i = 0; i < nY; i++) {
  series.push(a);        // push current term
  [a, b] = [b, a + b];   // swap values using destructuring
}
console.log(series.join(", "));
```

---

## Method 8: Generator Function

```js
function* fibonacciGen(limit) {     // Generator yields one Fibonacci number at a time (lazy)
  let a = 0, b = 1;
  for (let i = 0; i < limit; i++) {
    yield a;             // yield current value
    [a, b] = [b, a + b]; // update for next
  }
}
for (let num of fibonacciGen(10)) {     // Loop through generator
  console.log(num);
}
```

---

## Summary Table

| Method | Technique               | Performance  | Best For                          |
|--------|-------------------------|--------------|------------------------------------|
| 1      | For Loop                | Fast       | Beginners, structured logic        |
| 2      | While Loop              |  Fast       | Condition-controlled logic         |
| 3      | Do...While Loop         |  Fast       | At-least-one-run requirements      |
| 4      | Recursion (Naive)       |  Slow       | Learning recursion                 |
| 5      | Recursion + Memoization |  Optimized  | Efficient recursive calculation    |
| 6      | Array Storage           |  Fast       | Storing and reusing full series    |
| 7      | Destructuring Swap      |  Fast       | Memory-efficient, clean syntax     |
| 8      | Generator Function      |  Efficient  | Streaming large or infinite series |
