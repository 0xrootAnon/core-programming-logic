# Print ZigZag Pattern

- This document explains the JavaScript function `printZigZag(n)` in detail. The function prints a zigzag pattern using only `*` characters, spread across 3 fixed rows.

---

## Code Listing

```js
//complex pattern: print zigzag
function printZigZag(n) {
  for (let row = 1; row <= 3; row++) {
    let line = '';
    for (let col = 1; col <= n; col++) {
      if ((row + col) % 4 === 0 || (row === 2 && col % 4 === 0)) {
        line += '*';
      } else {
        line += ' ';
      }
    }
    console.log(line);
  }
}
printZigZag(15);
```

---

## Loop Logic Explanation

### Outer Loop - Row Loop

```js
for (let row = 1; row <= 3; row++) {
```

- This loop controls which row we're printing (Row 1, 2, or 3).
- The pattern is fixed to 3 rows for the zigzag design.

---

### Initialize Empty Line String

```js
let line = '';
```

- Creates an empty string to build the current row's pattern.
- Characters will be added one by one in the inner loop.

---

### Inner Loop - Column Loop

```js
for (let col = 1; col <= n; col++) {
```

- Iterates over each column from 1 to `n` for the current row.
- This determines whether a star `*` or space `' '` goes in each position.

---

### Star Placement Condition

```js
if ((row + col) % 4 === 0 || (row === 2 && col % 4 === 0)) {
```

- This condition decides where to place `*`:

- `(row + col) % 4 === 0`: places stars diagonally from top-left to bottom-right.
- `(row === 2 && col % 4 === 0)`: adds extra stars on row 2 to create a zigzag shape.

---

### Add Character to Line

```js
line += '*';
```

- Appends a star when condition is true.

```js
line += ' ';
```

- Appends a space otherwise.

---

## Sample Output for `n = 15`

```
  *   *   *   *  
 * * * * * * * * 
*   *   *   *   *
```

---

## Pattern Characteristics

- The pattern always spans 3 rows.
- Star positions form a zigzag diagonal path.
- Column spacing is controlled by modulo conditions.

---

## Customization Tips

- Change `n` to make the zigzag longer or shorter.
- You can replace `*` with other symbols for creative output.
- Only works correctly with 3 rows — not scalable to other row counts without modifying the logic.

---
