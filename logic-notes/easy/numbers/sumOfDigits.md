# Finding sum of digits of a number

A program that takes a number and calculates the **sum of its digits**.

---

## How It Works

### Method 1
- Start with `num = 2006` and `sum = 0`.
- Use `% 10` to get the last digit → `6`.
- Add it to the sum → `sum = 6`.
- Remove the last digit using `Math.floor(num / 10)` → `num = 200`.
- Repeat steps until `num > 0`.

### Method 2
This version takes user input using Node.js and calculates the sum of digits.

1. The `readline` module is imported to handle user input from the terminal.
2. An input/output interface is created using `readline.createInterface()` which reads input from the keyboard and displays output to the terminal.
3. The user is prompted to enter an integer using `rl.question()`.
4. The input is received as a string, so it is converted to a number using `Number(input)`.
5. A variable `sum` is initialized to 0 to store the cumulative sum of digits.
6. A `while` loop runs until the number becomes 0:
   - In each iteration, the last digit is extracted using the modulus operator `% 10`.
   - This digit is added to `sum`.
   - The last digit is removed from the number using `Math.floor(input / 10)`.
7. After the loop ends, the final sum is printed using `console.log()`.
8. The `readline` interface is closed using `rl.close()` to end the input session.

---