//method 1: recursive sum of digits
function digitalRoot(n) {
  if (n < 10) return n;
  return digitalRoot(n.toString().split('').reduce((a, b) => +a + +b));
}

//method 2: cool math trick
function digitalRootMath(n) {
  return n === 0 ? 0 : 1 + ((n - 1) % 9);
}
