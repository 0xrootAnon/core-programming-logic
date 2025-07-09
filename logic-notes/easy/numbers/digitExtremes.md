# Finding Largest and Smallest Digits in a Number

- The function `findExtremes(num)` is created to find the **largest** and **smallest** digits in a given number.
- The input number is first converted to a positive value using `Math.abs(num)` to ignore any negative sign.
- Two variables are initialized:
  - `largest = 0` → this is the **starting point** to track the maximum digit.
  - `smallest = 9` → this is the **starting point** to track the minimum digit.

---

## Now, your obvious question, "Why `largest = 0` and `smallest = 9`????"

###  Think of it Like This:

 `largest = 0` → "I’ve seen nothing yet, so I assume the biggest digit is 0 for now."

- As soon as we see any digit, like 2 or 3, we say:
  - “Hey! 2 is bigger than 0!” => so we update `largest = 2`
  - Then: “Hey! 3 is bigger than 2!” => update again => `largest = 3`
  - And so on...

 `smallest = 9` => "I assume the smallest digit is 9 for now."

- When we see digits like 2 or 3, we check:
  - “Is 2 smaller than 9?” => Yes => `smallest = 2`
  - “Is 3 smaller than 2?” => No => keep it as is.
  - Done.

---

 We **start with the worst possible guess** so that the **first digit** will always replace it, and we keep updating as we go.


---

## Inside the `while` loop:

The loop runs as long as `num > 0`, which means there are still digits left.

1. **Extract the last digit** using modulus
2. **Compare** and update extremes
3. Remove the last digit using **Math.floor** to continue the loop

##  Key Concepts Used

- `Math.abs()` => to handle negative numbers.
- `%` (modulus) => to extract the last digit.
- `Math.floor()` => to remove the last digit from the number.
- `while` loop => to go through all digits.
- **Comparison logic** => to update the largest and smallest digits.
- `return {}` => to return both values cleanly in a single object.

