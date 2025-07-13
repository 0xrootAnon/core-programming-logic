#  Solving Linear Equation (Brute Force)

###  Problem:
Find all integer pairs **(x, y)** such that:

```
2x + 3y = 18
```

---

```js
function solveEquation(limit) {
  const solutions = [];
  for (let x = 0; x <= limit; x++) {      // try all x from 0 to limit
    for (let y = 0; y <= limit; y++) {    // try all y from 0 to limit
      if (2 * x + 3 * y === 18) {         // check if the equation is satisfied
        solutions.push({ x, y });         // store valid pair
      }
    }
  }
  return solutions;
}
```

---

##  Example Call

```js
console.log(solveEquation(20));
```

Output:
```js
[
  { x: 0, y: 6 },
  { x: 3, y: 4 },
  { x: 6, y: 2 },
  { x: 9, y: 0 }
]
```

Each pair is a valid integer solution to:  
**`2x + 3y = 18`**

---

##  How It Works

- Uses a **brute-force nested loop** to try all combinations of `(x, y)` from `0` to `limit`
- Checks which combinations satisfy the linear equation
- Collects and returns the matching pairs

---

## Time Complexity

- **O(n²)** where `n = limit`
- Can be optimized using math (e.g., solve for `y = (18 - 2x)/3` and check if integer)

---

##  Math Insight (Optional)

Equation:  
`2x + 3y = 18` → Rearranged: `y = (18 - 2x)/3`  
→ `y` must be an integer ⇒ `(18 - 2x)` must be divisible by 3  
→ Loop only over x values that satisfy this

---