# Maximum Subarray Sum by Kadane’s Algorithm

- Kadane’s Algorithm efficiently finds the **maximum sum of a contiguous subarray** in linear time.

---

```js
function kadane(arr) {
  let maxSoFar = arr[0];   // stores the overall maximum sum
  let currMax = arr[0];    // stores current subarray sum
  for (let i = 1; i < arr.length; i++) {
    // decide whether to start new subarray or extend current one
    currMax = Math.max(arr[i], currMax + arr[i]);
    // update max if current subarray sum is greater
    maxSoFar = Math.max(maxSoFar, currMax);
  }
  return maxSoFar;
}
```

---

##  Logic

- At each index, decide:
  - Start new subarray (`arr[i]`)
  - Continue previous subarray (`currMax + arr[i]`)
- Update `maxSoFar` if `currMax` is the new maximum

---

##  Example

```js
kadane([−2, 1, −3, 4, −1, 2, 1, −5, 4]); 
```

---

## ⏱ Time & Space Complexity

- **Time:** O(n)
- **Space:** O(1) (no extra memory used)

---

##  Notes

- Works even with negative numbers.
- To **return the subarray itself**, store start and end indices.
- For all-negative arrays, returns the **largest single element**.

---
