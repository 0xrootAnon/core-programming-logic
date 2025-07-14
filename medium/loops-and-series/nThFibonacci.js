//nth fibonacci

//method 1: for loop
function fibForLoop(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b; // next number in series
    a = b;              // move b to a
    b = temp;           // move temp to b
  }
  return b;
}

//method 2: while loop
function fibWhileLoop(n) {
  if (n <= 1) return n;
  let a = 0, b = 1, i = 2;
  while (i <= n) {
    const temp = a + b;
    a = b;
    b = temp;
    i++;
  }
  return b;
}

//method 3: do...while loop
function fibDoWhileLoop(n) {
  if (n <= 1) return n;
  let a = 0, b = 1, i = 2;
  do {
    const temp = a + b;
    a = b;
    b = temp;
    i++;
  } while (i <= n);
  return b;
}

//method 4: dynamic [rogramming array (tabulation)
function fibDPArray(n) {
  if (n <= 1) return n;
  const dp = Array(n + 1); // array to store all fib numbers
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]; // build up from bottom
  }
  return dp[n];
}

//method 5: 2-element array rotation (space optimized)
function fibOptimizedArray(n) {
  if (n <= 1) return n;
  const fibs = [0, 1]; // only 2 elements used, rotated
  for (let i = 2; i <= n; i++) {
    fibs[i % 2] = fibs[0] + fibs[1]; // overwrite using mod 2
  }
  return fibs[n % 2];
}

const n = 10;
console.log("Method 1 - For Loop:", fibForLoop(n));
console.log("Method 2 - While Loop:", fibWhileLoop(n));
console.log("Method 3 - Do...While Loop:", fibDoWhileLoop(n));
console.log("Method 4 - DP Array:", fibDPArray(n));
console.log("Method 5 - Optimized Array:", fibOptimizedArray(n));
