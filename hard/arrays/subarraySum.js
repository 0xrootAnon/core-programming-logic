//subarray with given sum 

function subarraySum(arr, target) {
  let sum = 0, start = 0;
  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];
    while (sum > target) {
      sum -= arr[start++];
    }
    if (sum === target) return arr.slice(start, end + 1);
  }
  return [];
}
