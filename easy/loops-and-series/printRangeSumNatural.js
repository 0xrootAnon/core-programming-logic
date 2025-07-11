//sum of first N natural numbers 

//method 1:using mathematical formula

let n0 = 10;
let sum0 = (n0 * (n0 + 1)) / 2;
console.log("Sum using formula:", sum0);

//method 2: using for loop
let n1 = 10;
let sum1 = 0;
for (let i = 1; i <= n1; i++) {
  sum1 += i;
}
console.log("Sum using for loop:", sum1);

//method 3: using while loop
let n2 = 10;
let i2 = 1;
let sum2 = 0;
while (i2 <= n2) {
  sum2 += i2;
  i2++;
}
console.log("Sum using while loop:", sum2);

//method 4: using do-while
let n3 = 10;
let i3 = 1;
let sum3 = 0;
do {
  sum3 += i3;
  i3++;
} while (i3 <= n3);
console.log("Sum using do-while loop:", sum3);

//method 5: using recursion
function recursiveSum(n) {
  if (n === 0) return 0;
  return n + recursiveSum(n - 1);
}
console.log("Sum using recursion:", recursiveSum(10));
