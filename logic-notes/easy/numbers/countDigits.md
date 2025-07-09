# Counting Number of Digits in a Given Number

- A function `countIt(num)` is created that takes a number as input.
- The number is converted to a positive value using `Math.abs(num)` so that negative signs don’t affect digit count.
- If the number is `0`, we return `1` because `0` is considered a **single-digit** number.
- We initialize a counter variable `count = 0` to store how many digits the number has.
- A `while` loop runs as long as the number is greater than 0:
  - On each iteration:
    - We increment `count` by 1.
    - We remove the last digit from the number using `Math.floor(num / 10)`.
- When the number becomes 0, the loop stops, and we return `count` as the total number of digits.

---

### Key Concepts Used:
- Math.abs() to handle negative numbers.
- Math.floor() for digit removal.
- Basic loop and counter technique

##  Example:
```js
countIt(9754736487547956746534759635937605386937); // returns 40

