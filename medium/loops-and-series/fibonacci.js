//print fibonacci series 
//next: nth fibonacci number (recursive & iterative) 
//after that: factorial of a number (iterative/recursive)

//method 1: using for
let n0 = 10; // number of terms
let a0 = 0, b0 = 1;
console.log(a0); 
console.log(b0);
for (let i0 = 2; i0 < n0; i0++) {
  let next = a0 + b0; // next term = previous two
  console.log(next);
  a0 = b0;  // shift window
  b0 = next;
}

//method 2: using while: 
let n1 = 10;
let a1 = 0, b1 = 1, count1 = 2;
console.log(a1);
console.log(b1);
while (count1 < n1) {
  let next1 = a1 + b1;
  console.log(next1);
  a1 = b1;
  b1 = next1;
  count1++;
}

//method 3:  do-while
let n2 = 10;
let a2 = 0, b2 = 1, count2 = 2;
console.log(a2);
console.log(b2);
do {
  let next2 = a2 + b2;
  console.log(next2);
  a2 = b2;
  b2 = next2;
  count2++;
} while (count2 < n2);

//method 4: recursion
function fibonacci(n3) {
  if (n3 === 0) return 0;
  if (n3 === 1) return 1;
  return fibonacci(n3 - 1) + fibonacci(n3 - 2);
}
let terms0 = 10;
for (let i = 0; i < terms0; i++) {
  console.log(fibonacci(i));
}

//method 5: recursion with memoizationn (caching)
const memo = {};
function fib(n) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  return memo[n] = fib(n - 1) + fib(n - 2);
}
for (let i = 0; i < 10; i++) {
  console.log(fib(i));
}

//method 6: storing the series in array
let nX = 10;
let fib0 = [0, 1];
for (let iX = 2; iX < nX; iX++) {
  fib0[iX] = fib0[iX - 1] + fib0[iX - 2];
}
console.log(fib0.join(", "));

//method 7: storing only last two terms
let nY = 10;
let series = [];
let a = 0, b = 1;
for (let i = 0; i < nY; i++) {
  series.push(a);
  [a, b] = [b, a + b]; // swap and update
}
console.log(series.join(", "));

//method 8: generator fx
function* fibonacciGen(limit) {
  let a = 0, b = 1;
  for (let i = 0; i < limit; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}
for (let num of fibonacciGen(10)) {
  console.log(num);
}
