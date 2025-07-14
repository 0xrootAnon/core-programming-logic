//to calculate base^exponent 

//method 1: using math fx
const result1 = Math.pow(2, 3);  // 2^3 = 8
console.log("Math.pow():", result1); // Output: 8

//method 2: using ** exponentiation operator (ES6+)
const result2 = 2 ** 3;  // 2 raised to the power 3
console.log("Exponentiation (**):", result2); // Output: 8

//method 3: manual loop-based implementation
function powerLoop(base, exponent) {
  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result *= base;
  }
  return result;
}
console.log("Loop method:", powerLoop(2, 3)); // Output: 8

//method 4: recursive implementation
function powerRecursive(base, exponent) {
  if (exponent === 0) return 1;              // base^0 = 1
  return base * powerRecursive(base, exponent - 1);
}
console.log("Recursive method:", powerRecursive(2, 3)); // Output: 8

//method 5: negative exponent using **
const result5 = 2 ** -3; // 1 / (2^3) = 1/8
console.log("Negative exponent (**):", result5); // Output: 0.125
