# Multiplying Two Numbers Without Using `*` Operator

This logic uses **repeated addition** instead of the multiplication operator (`*`).  
The idea is simple: multiplication is just adding the same number multiple times.

---

## Explanation

- A function `prodWithoutprod(a, b)` is defined to multiply two numbers without using the `*` operator.
- First, we check whether the result should be **negative** or **positive**. If only one of the inputs is negative (XOR logic), then  the result should be negative. 
- We convert both numbers to their positive form using Math.abs()
- Then we initialize a variable product = 0.
- Using a for loop, we add a to product exactly b times
- After the loop, we apply the negative sign to the result if needed
- Finally, return the product.
 
# Key Concepts Used

- Math.abs() => to handle negative inputs.
- !== (XOR logic) => to detect if only one value is negative.
- for loop => to perform repeated addition.
- No use of * operator.
- Sign adjustment logic after loop.