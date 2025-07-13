# Multiplication Table Printer

- This function prints the multiplication table of a given number up to a specified number of terms.

---

```js
// print multiplication table for a number up to 'upto' terms
function printTable(num, upto) {
  for (let i = 1; i <= upto; i++) {
    console.log(`${num} × ${i} = ${num * i}`); // formatted output
  }
}
```

---

## Example

```js
printTable(5, 10);
```

### Output:
```
5 × 1 = 5
5 × 2 = 10
5 × 3 = 15
5 × 4 = 20
5 × 5 = 25
5 × 6 = 30
5 × 7 = 35
5 × 8 = 40
5 × 9 = 45
5 × 10 = 50
```

---

## Notes

- You can customize the `×` symbol or replace it with `*` if needed.
- Works for any integer or float as the base number.
- To store the results, modify `console.log()` to `result.push(...)` and return an array.

---
