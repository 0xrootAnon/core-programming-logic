# Print Diamond Pattern

This document explains the JavaScript function `printDiamond(n)` in detail, including the purpose of each line and how the algorithm works to produce a diamond pattern of `*` characters.

---

## Code Listing

```js
// complex pattern: print diamond
function printDiamond(n) {   //constructs the top half of the diamond (including the middle row)
  for (let i = 1; i <= n; i++) {
    let spaces = ' '.repeat(n - i);
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
  }
  for (let i = n - 1; i >= 1; i--) {  //constructs the bottom half of the diamond (excluding the middle row)
    let spaces = ' '.repeat(n - i);
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}
printDiamond(5);
```

---

## Loop Logic Explanation

### Top Half Construction Logic

```js
for (let i = 1; i <= n; i++) {
```

- Starts a `for` loop from 1 to `n`. Each iteration prints one row of the top half of the diamond.

- When `i = 1`: the smallest top tip (1 star)
- When `i = n`: the widest middle row

```js
  let spaces = ' '.repeat(n - i);
```

* Calculates the leading spaces:

- `n - i` centers the row by adding padding
- `.repeat()` creates a string with that many spaces

```js
  let stars = '*'.repeat(2 * i - 1);
```

* Calculates the number of stars:

- Follows the odd number pattern: 1, 3, 5, ...
- `.repeat()` builds that many `*` characters

```js
  console.log(spaces + stars);
```

- Prints the final row with leading spaces and centered stars.


### Bottom Half Construction Logic

```js
for (let i = n - 1; i >= 1; i--) {
```

* Starts from `n - 1` and decrements down to 1. Builds the bottom half of the diamond.

- Mirrors the top half upside-down
- Skips the middle row (already printed above)

```js
  let spaces = ' '.repeat(n - i);
```

Same logic as top half:

- Adds left-padding spaces to keep the shape centered

```js
  let stars = '*'.repeat(2 * i - 1);
```

* Decreasing star count:

- Matches the reverse of the top half pattern

```js
  console.log(spaces + stars);
```
---

## Sample Output for n = 5

```
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

- Top half (5 rows): Expands from 1 to 9 stars
- Bottom half (4 rows): Shrinks back from 7 to 1 star

---

## Customization Tips

- Change `n` to resize the diamond. Total rows = `2n - 1`
- Replace `'*'` with other symbols like `#`, `+`, `@`, etc.
- Add colors using ANSI escape codes (for CLI styling)

---
