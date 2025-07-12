//method a: kadane’s algorithm (O(n))
function maxSubarrayKadane(arr) {
  let maxSoFar = arr[0], curr = arr[0];
  for (let i = 1; i < arr.length; i++) {
    curr = Math.max(arr[i], curr + arr[i]);
    maxSoFar = Math.max(maxSoFar, curr);
  }
  return maxSoFar;
}

//method b: prefix sums + min‑prefix tracking (O(n))
function maxSubarrayPrefix(arr) {
  let minPref = 0, sum = 0, maxSum = -Infinity;
  for (let x of arr) {
    sum += x;
    maxSum = Math.max(maxSum, sum - minPref);
    minPref = Math.min(minPref, sum);
  }
  return maxSum;
}

//method c: brute‑force (O(n²))
function maxSubarrayBrute(arr) {
  let best = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      best = Math.max(best, sum);
    }
  }
  return best;
}
