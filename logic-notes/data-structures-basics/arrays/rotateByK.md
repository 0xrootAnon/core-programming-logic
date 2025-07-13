#  Rotate Array by `k` Steps 

- This document explores three key methods to rotate an array **right by `k` positions** in JavaScript, with varying trade-offs in performance and mutation.

---

##  Method A: Slice + Concat

```js
function rotateSlice(arr, k) {
  k %= arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}
```

- Uses `.slice()` to split and `.concat()` to join rotated parts.
- **Returns a new array** (non-mutating).
- Simple and readable.
- Time: O(n), Space: O(n)

---

##  Method B: Reverse-Rotate Trick

```js
function rotateReverse(arr, k) {
  k %= arr.length;
  const res = [...arr];        // clone to avoid mutation
  res.reverse();               // Step 1: reverse entire array
  reverseTwoPointer(res.slice(0, k));  // Step 2: reverse first k
  reverseTwoPointer(res.slice(k));    // Step 3: reverse remaining
  return res.reverse();        // Step 4: reverse whole again
}
```

- Classic rotation technique using **three reversals**.
- Efficient and elegant.
- Requires helper `reverseTwoPointer()`:
  
```js
function reverseTwoPointer(arr) {
  let a = 0, b = arr.length - 1;
  while (a < b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
    a++; b--;
  }
  return arr;
}
```

- Time: O(n), Space: O(1) (if in-place), O(n) here due to clone.

---

##  Method C: Manual Shifting (In-place)

```js
function rotateInPlace(arr, k) {
  k %= arr.length;
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}
```

- Shifts array right one step, `k` times.
- **Modifies original array**
- Less optimal for large `k` due to repeated `.unshift()` (O(n²))

---

##  Comparison

| Method            | Time   | Space | Mutates? | Notes                          |
|-------------------|--------|-------|----------|--------------------------------|
| Slice + Concat    | O(n)   | O(n)  |  No     | Clean and concise              |
| Reverse-Rotate    | O(n)   | O(n)  |  No     | Efficient with helper          |
| Manual Shift      | O(k·n) | O(1)  |  Yes    | Slow for large arrays          |

---

##  Example

```js
const arr = [1, 2, 3, 4, 5];
rotateSlice(arr, 2);       
rotateInPlace([...arr], 2) 
rotateReverse(arr, 2);     
```

---
