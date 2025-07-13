# Subarray with Given Sum

- This function finds a **contiguous subarray** whose sum is exactly equal to a given `target`.

---

```js
function subarraySum(arr, target) {
  let sum = 0, start = 0;
  for (let end = 0; end < arr.length; end++) {
    sum += arr[end]; // expand the window to the right
    // shrink the window from the left if sum exceeds target
    while (sum > target) {
      sum -= arr[start++];
    }
    // check if we found the target sum
    if (sum === target) return arr.slice(start, end + 1);
  }
  return []; // no subarray found
}
```

---

##  Example

```js
subarraySum([1, 2, 3, 7, 5], 12); 

subarraySum([1, 4, 20, 3, 10, 5], 33);
```

---

##  How It Works

- Uses the **sliding window technique**
- Maintains a window `[start ... end]` whose elements are being summed
- If sum > target → shrink from left
- If sum == target → return that slice
- Works best for **positive integers**

---

##  Time & Space Complexity

- **Time:** O(n) — each element is added and removed at most once
- **Space:** O(1) extra, O(k) if storing the result

---

##  Limitations

- Only works with **non-negative** numbers.
- For arrays with negative values, use a different approach like prefix sums or hash maps.

---