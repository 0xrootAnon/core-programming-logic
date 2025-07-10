#  Finding Armstrong Numbers

An **Armstrong number** (also called a narcissistic number) is a number that is equal to the **sum of its own digits each raised to the power of the number of digits**, i.e., a number `n` is an **Armstrong number** if, abc... = a^d + b^d + c^d + ... (where d = total digits).

---

##  Step-by-Step Logic (for any number):

1. **Take an input number** => let’s say `num`.
2. **Count the digits** => store as `digitCount`.
3. Extract each digit one by one:
   - Use `% 10` to get the last digit.
   - Raise it to the power of `digitCount`.
   - Add to a running `sum`.
   - Use `Math.floor(num / 10)` to remove the last digit.
4. Compare the final `sum` with the original number.

---

##  How It Works (Example: 9474)

- **Digits** = 4  
- **Split**: 9, 4, 7, 4  
- **Sum** = 9⁴ + 4⁴ + 7⁴ + 4⁴ = **9474** => Armstrong number

---

##  Built-in Methods Used

| Function / Operator     | Purpose                                       |
|-------------------------|-----------------------------------------------|
| `toString().length`     | Count number of digits                        |
| `%` (modulus)           | Extract last digit                            |
| `Math.pow(base, exp)`   | Raise digit to power of number of digits      |
| `Math.floor()`          | Remove last digit                             |

---

##  Summary

- Armstrong numbers are based on the **power of their digits**.
- Use `Math.pow()` to raise each digit.
- Loop through the digits using `%` and `Math.floor()`.
