//fast exponentiation (using log time)
//computes base^exp using binary exponentiation (logarithmic time)
function fastExponentiation(base, exp) {
  let result = 1;
  while (exp > 0) {
    if (exp % 2 === 1) {       // if current power bit is 1 (odd)
      result *= base;         // multiply the current base to the result
    }
    base *= base;             // square the base for next bit
    exp = Math.floor(exp / 2); // shift exponent to right (divide by 2)
  }
  return result;
} //temp test:-
console.log(fastExponentiation(2, 10));  
console.log(fastExponentiation(3, 5));  
