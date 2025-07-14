//factorial of a number

//method 1: for loop
function factorialForLoop(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

//method 2: while loop
function factorialWhileLoop(n) {
  let result = 1, i = 2;
  while (i <= n) {
    result *= i;
    i++;
  }
  return result;
}

//method 3: do...while loop
function factorialDoWhileLoop(n) {
  let result = 1, i = 2;
  if (n === 0) return 1;
  do {
    result *= i;
    i++;
  } while (i <= n);
  return result;
}

//method 4: precomputed table (lookup)
const factorialTable = (() => {
  const fact = [1]; // fact[0] = 0! = 1
  for (let i = 1; i <= 100; i++) {
    fact[i] = fact[i - 1] * i;
  }
  return fact;
})();
function factorialFromTable(n) {
  return factorialTable[n];
}

//method 5: bigint factorial (for very large n)
function factorialBigInt(n) {
  let result = 1n;
  for (let i = 2n; i <= BigInt(n); i++) {
    result *= i;
  }
  return result;
}

const n=5;
console.log("Method 1 - For Loop:", factorialForLoop(n));
console.log("Method 2 - While Loop:", factorialWhileLoop(n));
console.log("Method 3 - Do...While Loop:", factorialDoWhileLoop(n));
console.log("Method 4 - From Precomputed Table:", factorialFromTable(n));
console.log("Method 5 - BigInt:", factorialBigInt(n).toString());
