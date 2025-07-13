#  Maximum Subarray Sum (Kadane’s and Variants)

- The problem is to find the **maximum sum** of any **contiguous subarray** in a given array.

---

##  Methods and Code Explanation

### 🔹 Method A: Kadane’s Algorithm — `O(n)`

```js
function maxSubarrayKadane(arr) {
  let maxSoFar = arr[0], curr = arr[0];
  for (let i = 1; i < arr.length; i++) {
    curr = Math.max(arr[i], curr + arr[i]);    // extend or restart subarray
    maxSoFar = Math.max(maxSoFar, curr);       // track best seen so far
  }
  return maxSoFar;
}
```

####  Logic
- At each step, decide whether to:
  - Add to the existing subarray (`curr + arr[i]`)
  - Start a new subarray from current element (`arr[i]`)
- `maxSoFar` tracks the global best.

---

### 🔹 Method B: Prefix Sums + Min Prefix Tracking — `O(n)`

```js
function maxSubarrayPrefix(arr) {
  let minPref = 0, sum = 0, maxSum = -Infinity;
  for (let x of arr) {
    sum += x;
    maxSum = Math.max(maxSum, sum - minPref);  // best possible subarray
    minPref = Math.min(minPref, sum);          // update min prefix
  }
  return maxSum;
}
```

####  Logic
- Idea: Maximum subarray from `i..j` is `prefix[j] - min(prefix[0..j-1])`
- Track running total (`sum`) and minimum prefix seen so far (`minPref`)

---

### 🔹 Method C: Brute Force — `O(n²)`

```js
function maxSubarrayBrute(arr) {
  let best = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];                     // try all subarrays
      best = Math.max(best, sum);       // update max sum
    }
  }
  return best;
}
```

####  Logic
- Try every subarray from index `i` to `j`
- Track and return the maximum sum found

---

##  Comparison Table

| Method             | Time    | Space | Key Idea                        |
|--------------------|---------|-------|----------------------------------|
| Kadane’s           | O(n)    | O(1)  | Extend or restart subarray       |
| Prefix Sum Trick   | O(n)    | O(1)  | `sum - minPrefix` pattern        |
| Brute Force        | O(n²)   | O(1)  | Try every subarray               |

---

##  Example

```js
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
maxSubarrayKadane(arr);   
```

---

##  When to Use What?

| Situation                      | Recommended Method |
|-------------------------------|--------------------|
| Fastest general use           | Kadane’s Algorithm |
| Alternative prefix logic      | Prefix Tracking    |
| Learning / understanding      | Brute Force        |

---