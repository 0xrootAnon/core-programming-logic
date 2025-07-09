### Method 1: Using Mathematical Logic
- Initialize a number and a variable `reverse = 0`.
- Run a `while` loop which:
  1. Checks if the number is greater than `0`.
  2. Extracts the last digit using the modulus operator: `lastDigit = num % 10`.
  3. Updates the reverse value: `reverse = reverse * 10 + lastDigit`.
  4. Removes the last digit from the original number using `Math.floor(num / 10)` and assigns it back to `num`.
- Continue the loop until `num > 0`.
- Print the reversed number.

---

### Method 2: Using String Reversal
- Create a function that accepts a `num` parameter.
- Initialize a variable `str = num.toString()` to convert the number into a string.
- Create an empty string `rev` to store the reversed value.
- Run a `for` loop: `for (let i = 0; i < str.length; i++)`
  - Reverse the string using: `rev = str[i] + rev`.
- After the loop, convert the reversed string back to a number using `parseInt(rev)`.
- Print the final reversed number.
