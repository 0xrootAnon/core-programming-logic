# Fast Exponentiation using Binary Exponentiation (Logarithmic Time)

- This function computes base^exp (i.e., base raised to the power exp) efficiently
- It reduces time complexity from O(exp) to O(log exp)
- Works for large exponents without repeated multiplications

---

```js
function fastExponentiation(base, exp) {
  let result = 1; //initialize result as 1 (multiplicative identity)
  while (exp > 0) {  //loop until exponent becomes 0
    if (exp % 2 === 1) {        //if current exponent bit is 1 (i.e., exp is odd) [In binary: 13 = 1101 → process bits from right to left]
      result *= base; //multiply current base to the result; this means the current base contributes to final answer
    }
    base *= base;       //square the base for the next binary digit (bit shift left)
    exp = Math.floor(exp / 2); //divide exponent by 2 (bit shift right)
  }
  return result; //return the final computed power
}
console.log(fastExponentiation(2, 10));  // Output: 1024 (2^10)
console.log(fastExponentiation(3, 5));   // Output: 243 (3^5)
```

---

## How It Works

---

### Binary Representation of Power

- Let’s say: `exp = 13` → in binary: `1101`; that means: base¹³ = base⁸ × base⁴ × base¹; so instead of multiplying `base` 13 times, we only multiply selected powers of base **where the binary digit (bit) is 1**.

---

### Step-by-Step Example for `fastExponentiation(3, 5)`
- Binary of `5` = `101`
- Start with `result = 1`

**Loop steps:**
1. `exp = 5` (odd) →  
   `result = 1 × 3 = 3`  
   `base = 3² = 9`  
   `exp = 2`

2. `exp = 2` (even) →  
   Skip multiply  
   `base = 9² = 81`  
   `exp = 1`

3. `exp = 1` (odd) →  
   `result = 3 × 81 = 243`  
   `base = 81²`  
   `exp = 0`

 **Loop ends => Final Result = 243**

---

### Time and Space Complexity

| Property                   | Value       |
|----------------------------|-------------|
| Time Complexity            | `O(log exp)` |
| Space Complexity (iterative) | `O(1)`     |

---

###  When to Use

- When you want to **compute large powers quickly**
- Useful in:
  - Mathematical problems
  - Cryptography
  - Number theory
- Forms the base for **modular exponentiation** (used in RSA and other algorithms)

