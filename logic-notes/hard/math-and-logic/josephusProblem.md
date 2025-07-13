#  Josephus Problem (Mathematical Puzzle)

The **Josephus problem** is a classic puzzle based on a group of people standing in a circle and eliminating every `k`-th person until only one remains.

---

##  Problem Statement

> Given `n` people numbered `1` to `n` standing in a circle. Starting from person 1, every `k`-th person is eliminated. Who is the survivor?

---

##  Recursive Solution (Mathematical Formula)

```js
// Zero-indexed Josephus survivor (returns 0-based position)
function josephus(n, k) {
  if (n === 1) return 0;
  return (josephus(n - 1, k) + k) % n;
}
// Convert to 1-based answer (human-friendly)
function josephusPosition(n, k) {
  return josephus(n, k) + 1;
}
```

###  Example

```js
josephusPosition(7, 3); 
```

---

##  Iterative Space-Optimized Version

```js
function josephusIterative(n, k) {
  let result = 0;
  for (let i = 2; i <= n; i++) {
    result = (result + k) % i;
  }
  return result + 1; // convert to 1-indexed
}
```

###  Example

```js
josephusIterative(7, 3); 
```

---

##  How It Works

### Recursive Formula:

Let `f(n)` be the position of the survivor (0-indexed):

```
f(1) = 0
f(n) = (f(n - 1) + k) % n
```

At each step, we reduce the problem to `n-1` people, adjusting the survivor index using modulus.

### Iterative Version:

Instead of recursion, we build up the result from `2` to `n`, keeping track of the last safe position.

---

##  Time & Space Complexity

| Method        | Time  | Space |
|---------------|-------|-------|
| Recursive     | O(n)  | O(n)  |
| Iterative     | O(n)  | O(1)  |

---

##  Real-Life Use Case

- The original Josephus problem comes from a historical account where Josephus and others were trapped and chose to commit suicide in a circle rather than be captured.
- Josephus survived by calculating the safe position.

---

##  Example Walkthrough (n = 7, k = 3)

Elimination order:  
1 → 2 → **(3 eliminated)**  
4 → 5 → **(6 eliminated)**  
7 → 1 → **(2 eliminated)**  
4 → 5 → **(7 eliminated)**  
1 → 4 → **(5 eliminated)**  
1 → **(1 eliminated)**  
Survivor: 4

---
