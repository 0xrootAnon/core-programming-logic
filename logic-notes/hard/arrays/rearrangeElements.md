# Rearranging Array Elements: Positive-Negative & Even-Odd

This script provides functions to rearrange array elements by grouping:
- Negative numbers before positive numbers
- Even numbers before odd numbers

---

##  Rearranging Positive and Negative Numbers

###  Logic:
Separate all positive and negative numbers, then merge them.

```js
function rearrangePosNeg(arr) {
  const pos = [], neg = [];
  for (let num of arr) {
    if (num >= 0) pos.push(num); // collect positive
    else neg.push(num);          // collect negative
  }
  return [...neg, ...pos]; // merge negatives first
}
```

###  Example:

```js
rearrangePosNeg([-2, 5, -3, 7, 0]); 
```

---

##  Rearranging Even and Odd Numbers

###  Logic:
Separate all even and odd numbers, then merge them.

```js
function rearrangeEvenOdd(arr) {
  const even = [], odd = [];
  for (let num of arr) {
    if (num % 2 === 0) even.push(num); // collect evens
    else odd.push(num);                // collect odds
  }
  return [...even, ...odd]; // merge evens first
}
```

###  Example:

```js
rearrangeEvenOdd([1, 2, 3, 4, 5, 6]);
```

---

##  Time & Space Complexity

- **Time:** O(n) — single pass through array
- **Space:** O(n) — new arrays for grouping

---

##  Notes

- Original relative order is preserved (stable rearrangement).
- You can reverse the merge order if you want opposite arrangement (e.g., positive before negative).

---