# Print Pyramid Pattern

- This document explains the JavaScript function `printPyramid(n)` in detail. The function prints a centered pyramid pattern using `*` characters and spaces.

---

## Code Listing

```js
// complex patterns: print pyramid
function printPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = ' '.repeat(n - i);
    let stars = '* '.repeat(i);
    console.log(spaces + stars.trim());
  }
}
printPyramid(5);
```

---

## Loop Logic Explanation

### Outer Loop - Rows

```js
for (let i = 1; i <= n; i++) {
```

- Controls the number of rows in the pyramid.
- Starts at 1 and goes up to `n`.

---

### Calculate Spaces

```js
let spaces = ' '.repeat(n - i);
```

- Adds left-padding spaces to center the row.
- `n - i` spaces are added so that stars appear centered.

---

### Generate Stars with Trailing Spaces

```js
let stars = '* '.repeat(i);
```

- Repeats the `* ` pattern (note the space after the star) `i` times.
- Creates increasing number of `*` in each row with spacing between them.

---

### Print the Row

```js
console.log(spaces + stars.trim());
```

- Combines the spaces and stars for the final row string.
- `.trim()` removes the trailing space from the last `*` to avoid uneven alignment.

---

## Sample Output for `n = 5`

```
    *
   * *
  * * *
 * * * *
* * * * *
```

---

## Pattern Characteristics

- Number of rows = `n`
- Each row `i` contains `i` stars
- Centered using leading spaces (`n - i`)
- `*` characters are spaced evenly using `' '` padding

---

## Customization Tips

- To make a full pyramid (double-sided), replace `'* '` with `'**'`
- Change `*` to other symbols like `#`, `@`, etc.
- Add colors using ANSI escape codes for visual styling in CLI

---
