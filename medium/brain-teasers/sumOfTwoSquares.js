//checking if a number can be expressed as sum of two squares 

//method 1: brute force
function isSumOfTwoSquares(n) {
  for (let a = 0; a * a <= n; a++) {
    let b = Math.sqrt(n - a * a);
    if (b === Math.floor(b)) return true;
  }
  return false;
}

//method 2: fermat's theorem (optional for advanced logic)
function isSumOfTwoSquaresFermat(n) {
  //advanced logic: Every prime ≡ 3 mod 4 must appear even times
  for (let i = 2; i * i <= n; i++) {
    let count = 0;
    while (n % i === 0) {
      n /= i;
      count++;
    }
    if (i % 4 === 3 && count % 2 !== 0) return false;
  }
  return n % 4 !== 3;
}
