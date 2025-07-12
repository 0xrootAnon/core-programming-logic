//josephus [mathematical puzzle]

//method 2: recursive formula (zero-indexed)
function josephus(n, k) {
  if (n === 1) return 0;
  return (josephus(n - 1, k) + k) % n;
}
// convert to 1-indexed position
function josephusPosition(n, k) {
  return josephus(n, k) + 1;
}

//method 2: iterative (space optimized)
function josephusIterative(n, k) {
  let result = 0;
  for (let i = 2; i <= n; i++) {
    result = (result + k) % i;
  }
  return result + 1;
}