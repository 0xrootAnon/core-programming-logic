#  Printing Numbers from 1 to N in JavaScript

- This file demonstrates four different ways to print numbers from `1` to `N` using:
- `for` loop
- `while` loop
- `do...while` loop
- Recursion

---

##  Method 1: Using `for` loop

```js
let n1 = 10; // define the upper limit N
for (let i = 1; i <= n1; i++) {
  console.log(i); // print current number
}
```

### Explanation:
Best when the number of iterations is known.
i starts from 1 and goes up to n1.
i++ increments the counter on each iteration.

---

## Method 2: Using while loop

```js
let i2 = 1;
let n2 = 10;
while (i2 <= n2) {
  console.log(i2); // print current number
  i2++; // move to next number
}
```

### Explanation:
Checks the condition before each iteration.
Needs manual initialization (i2 = 1) and increment (i2++).
Good when the loop should run based on dynamic conditions.

---

## Method 3: Using do...while loop

```js
let i3 = 1;
let n3 = 10;
do {
  console.log(i3); // print current number
  i3++; // move to next number
} while (i3 <= n3);
```

### Explanation:
Guarantees the loop runs at least once, even if the condition is false.
Ideal when you need to execute the loop body first.

---

### Method 4: Using Recursion

```js
function printNums(i, n) {
  if (i > n) return;     // base condition: stop when i exceeds n
  console.log(i);        // print current number
  printNums(i + 1, n);   // recursive call with incremented i
}
printNums(1, 10); // initial call
```

### Explanation:
Uses function calls instead of loops.
Each call prints one number and calls itself with i + 1.
Stops when i > n.
**Note: Recursion is elegant but not memory-efficient for large n.*

---

 **These variations build strong logic for controlling program flow using different looping constructs and recursion in JavaScript.**