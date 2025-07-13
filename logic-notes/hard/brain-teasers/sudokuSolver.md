#  Sudoku Solver (Recursion + Backtracking)

This function solves a 9x9 Sudoku puzzle using **backtracking** and **recursive search**.

---

```js
function solveSudoku(board) {
  // Checks if placing `val` at board[r][c] is valid
  function isValid(r, c, val) {
    for (let i = 0; i < 9; i++) {
      // Check current row, column, and 3x3 box
      if (
        board[r][i] === val || // row conflict
        board[i][c] === val || // column conflict
        board[3 * Math.floor(r / 3) + Math.floor(i / 3)][3 * Math.floor(c / 3) + i % 3] === val // box conflict
      ) return false;
    }
    return true;
  }
  // Recursive backtracking solver
  function solve() {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] === '.') { // empty cell
          for (let d = 1; d <= 9; d++) {
            const val = d.toString();
            if (isValid(r, c, val)) {
              board[r][c] = val;      // place digit
              if (solve()) return true; // recursively solve rest
              board[r][c] = '.';      // backtrack
            }
          }
          return false; // no valid number found for this cell
        }
      }
    }
    return true; // puzzle is completely filled
  }
  solve(); // start solving from first cell
}
```

---

##  How It Works

- Traverses the board **cell by cell**
- For each empty cell (`'.'`), tries digits `1` to `9`
- Places a digit only if `isValid()` returns `true` (no conflict in row, column, or 3x3 grid)
- Recursively solves the next cell
- If stuck, **backtracks** by undoing the last step and trying a new value

---

##  Time & Space Complexity

- **Time:** O(9^(m)) where m = number of empty cells
- **Space:** O(1) extra (modifies board in-place)

---

##  Input Format

Input board is a 2D array (9x9) filled with:
- Digits as strings `'1'` to `'9'`
- Empty cells as `'.'`

Example:

```js
const board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

solveSudoku(board);
console.log(board); //solved board in place
```

---

##  Notes

- The board is solved **in-place**.
- Can be extended to count **number of solutions**, or to solve **N x N** variants.
- This is a **classic backtracking problem**, commonly asked in interviews.

---