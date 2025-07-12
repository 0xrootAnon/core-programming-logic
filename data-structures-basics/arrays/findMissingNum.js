//method a: sum formula
function findMissingSum(arr, n) {
  const expected = (n * (n + 1)) / 2;
  const actual = arr.reduce((a, b) => a + b, 0);
  return expected - actual;
}

//method B: XOR trick
function findMissingXOR(arr, n) {
  let xo = 0;
  for (let i = 0; i <= n; i++) xo ^= i;
  for (let x of arr) xo ^= x;
  return xo;
}
