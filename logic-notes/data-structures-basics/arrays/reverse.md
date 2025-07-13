#  Reverse an Array 

- This file explains multiple ways to reverse an array in JavaScript — from simple built-ins to low-level manual logic.

---

## 🔹 Method A: Built‑in `.reverse()` (Mutates Original)

```js
function reverseBuiltin(arr) {
  return arr.reverse();  // modifies original array!
}
```

###  Logic
- Uses JavaScript's inbuilt method
- **Caution:** It mutates the original array (`arr` is changed)

---

## 🔹 Method B: Copy + `.reverse()` (Non-mutating)

```js
function reverseCopy(arr) {
  return [...arr].reverse();  // safe copy, no mutation
}
```

### Logic
- Spreads the array into a new one
- Calls `.reverse()` on the copy
- Original array stays unchanged

---

## 🔹 Method C: Two Pointer Swap

```js
function reverseTwoPointer(arr) {
  let a = 0, b = arr.length - 1;
  const res = [...arr];  // copy to avoid mutation
  while (a < b) {
    [res[a], res[b]] = [res[b], res[a]];  // swap ends
    a++; b--;
  }
  return res;
}
```

###  Logic
- Manually reverses using 2 pointers
- Swaps first and last, second and second-last, and so on
- Does not mutate input

---

## 🔹 Method D: Using `reduce()`

```js
function reverseReduce(arr) {
  return arr.reduce((acc, x) => [x, ...acc], []);
}
```

###  Logic
- Builds reversed array by placing each element at the beginning
- Functional style — no mutation
- Slightly slower for large arrays due to repeated prepends

---

##  Comparison Table

| Method           | Mutates? | Performance | Notes                      |
|------------------|----------|-------------|-----------------------------|
| Built‑in         |  Yes   |  Fastest   | Simple but **destructive** |
| Copy + Reverse   |  No    |  Fast      | Safe wrapper for `.reverse()` |
| Two Pointer Swap |  No    |  Fast      | Custom manual logic        |
| Reduce           |  No    |  Slower    | Functional, elegant        |

---

##  Example

```js
const arr = [1, 2, 3];
reverseBuiltin(arr);    
reverseCopy(arr);       
reverseTwoPointer(arr); 
reverseReduce(arr);     
```

---
