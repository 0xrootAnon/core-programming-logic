# Checking if Input is a Palindrome (Number or String)

A palindrome is a word, number, phrase, or sequence that reads the same forwards and backwards, ignoring spaces, punctuation, and case.
This function `findPalindrome(input)` checks whether the given **number** or **string** is a **palindrome** i.e., it reads the same **forwards and backwards**.

---

## What This Code Does:

- Accepts any value: number or string.
- Detects the **type of input**.
- If it's a **number**, it reverses the digits and compares with the original number.
- If it's a **string**, it reverses the characters and compares with the original string (case-insensitive).
- Returns:
  - `true` if the input is a palindrome.
  - `false` if it's not.
  - A message if the input is neither a string nor number.

---

###  Built-in Functions Used in Palindrome Checker

| Function / Method         | Description                                              |
|---------------------------|----------------------------------------------------------|
| `isNaN(value)`            | Returns `true` if the value is **Not a Number**.         |
| `Number(value)`           | Converts a string or other type into a **number**.       |
| `Math.floor(value)`       | Rounds a number **down** to the nearest whole number.    |
| `%` (modulus operator)    | Returns the **remainder** after division (used to extract digits). |
| `typeof value`            | Returns the **type** of the variable (`"string"`, `"number"`, etc.). |
| `toLowerCase()`           | Converts a **string to lowercase** (used to make comparison case-insensitive). |
| `trim()`                  | Removes **whitespace** from both ends of a string.       |
| `split("")`               | Converts a string into an **array of characters**.       |
| `reverse()`               | **Reverses** the elements of an array.                   |
| `join("")`                | Joins elements of an array into a **single string**.     |

---

###  Full Code:

```js
function findPalindrome(input) {
    if (!isNaN(input)) {    //NaN stands for "not a number", '!NaN' verifies if the input is a number or not
        let original = Number(input); //convert input to num if it's passed as string
        let num = original;
        let reversed = 0;
            while (num > 0) {   //this while loop reverses the number
            let lastDigit = num % 10;
            reversed = reversed * 10 + lastDigit;
            num = Math.floor(num / 10);
        }
        return reversed === original;   //returhn true if reversed number = actual input
    }else if (typeof input === "string") {
        let str = input.toLowerCase().trim();   //converting to lowercase in case any letter is capital or else we'll have problems when comparing
        let reversed = str.split("").reverse().join("");    //reverse the string
        return reversed === str;
    }else {     //if input wasnt a number or string
        return "Allowed inputs: number or string only";
    }
}
console.log(findPalindrome(121));       
console.log(findPalindrome(-121));      
console.log(findPalindrome("RaceCar")); 