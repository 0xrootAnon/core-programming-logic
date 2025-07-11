#  Print Even and Odd Numbers in a Range 

- This file demonstrates multiple ways to print all **even** and **odd** numbers between two integers `L` and `R` (inclusive) using different looping techniques and recursion.

###  Example:
If `L = 1` and `R = 10`,  
 **Even**: 2, 4, 6, 8, 10  
 **Odd**: 1, 3, 5, 7, 9

---

##  Method 1: Using `for` loop

```js
let L1 = 1, R1 = 10;
console.log("Even numbers using for loop:");
for (let i = L1; i <= R1; i++) {
  if (i % 2 === 0) console.log(i);
}
console.log("Odd numbers using for loop:");
for (let i = L1; i <= R1; i++) {
  if (i % 2 !== 0) console.log(i);
}
```

 Explanation: Loop from L1 to R1; Use % 2 to check even (=== 0) or odd (!== 0)

---

## Method 2: Using while loop

```js
let L2 = 1, R2 = 10;
let i2 = L2;
console.log("Even numbers using while loop:");
while (i2 <= R2) {
  if (i2 % 2 === 0) console.log(i2);
  i2++;
}
let j2 = L2;
console.log("Odd numbers using while loop:");
while (j2 <= R2) {
  if (j2 % 2 !== 0) console.log(j2);
  j2++;
}
```

 Explanation: Same logic as for, but requires manual initialization and incrementing of the loop counter.

---

## Method 3: Using do...while loop

```js
let L3 = 1, R3 = 10;
let i3 = L3;
console.log("Even numbers using do-while loop:");
do {
  if (i3 % 2 === 0) console.log(i3);
  i3++;
} while (i3 <= R3);
let j3 = L3;
console.log("Odd numbers using do-while loop:");
do {
  if (j3 % 2 !== 0) console.log(j3);
  j3++;
} while (j3 <= R3);
```

 Explanation: The loop body executes at least once before checking the condition, which can be useful in specific logic cases.

---

## Method 4: Using Recursion

```js
console.log("Even numbers using recursion:");
function printEven(l, r) {
  if (l > r) return;
  if (l % 2 === 0) console.log(l);
  printEven(l + 1, r);
}
printEven(1, 10);
console.log("Odd numbers using recursion:");
function printOdd(l, r) {
  if (l > r) return;
  if (l % 2 !== 0) console.log(l);
  printOdd(l + 1, r);
}
printOdd(1, 10);
```

 Explanation: A function that prints the current number (if even/odd), then recursively calls itself for the next number. Base case is when l > r.

---

## Method 5: Optimized Loop (Skip by 2)

```js
let L5 = 1, R5 = 10;
console.log("Even numbers using optimized step:");
let evenStart = L5 % 2 === 0 ? L5 : L5 + 1;
for (let i = evenStart; i <= R5; i += 2) {
  console.log(i);
}
console.log("Odd numbers using optimized step:");
let oddStart = L5 % 2 !== 0 ? L5 : L5 + 1;
for (let i = oddStart; i <= R5; i += 2) {
  console.log(i);
}
```

 Explanation: Start from the first even or odd number in the range. Increment by 2 instead of 1 to skip unnecessary numbers. **Faster, no conditionals inside the loop.**

---

###  Summary Table

| Method          | Loop Type   | Condition Check   | Performance | Best For                        |
|------------------|-------------|--------------------|-------------|----------------------------------|
| for loop         | Iterative   | Inside loop        | Fast        | Beginners, structured logic      |
| while loop       | Iterative   | Inside loop        | Fast        | Condition-controlled loops       |
| do...while loop  | Iterative   | After execution    | Medium      | At-least-one-run situations      |
| Recursion        | Recursive   | Base case          | Slowest     | Learning recursion               |
| Optimized loop   | Iterative   | Skipped via step   |  Fastest  | Performance-focused programs     |
