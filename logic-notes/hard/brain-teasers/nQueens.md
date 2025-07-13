#  N-Queens Problem (Backtracking)

The **N-Queens problem** asks:  
> How can you place `n` queens on an `n x n` chessboard so that no two queens attack each other?

This solution uses **backtracking** to explore valid configurations and return all possible solutions.

---

```js
function solveNQueens(n) {
  const result = []; // to store all valid board configurations
  const board = Array(n).fill().map(() => Array(n).fill('.')); // n x n board filled with '.'
  // check if placing a queen at (row, col) is safe
  function isSafe(row, col) {
    for (let i = 0; i < row; i++) {
      // check vertical column
      if (board[i][col] === 'Q') return false;
      // check left diagonal ↖
      if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
      // check right diagonal ↗
      if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false;
    }
    return true;
  }
  // recursive backtracking function
  function backtrack(row) {
    if (row === n) {
      // convert board to array of strings and store solution
      result.push(board.map(r => r.join('')));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = 'Q';     // place queen
        backtrack(row + 1);        // recurse to next row
        board[row][col] = '.';     // backtrack (remove queen)
      }
    }
  }
  backtrack(0); // start from row 0
  return result;
}
```

---

##  Example

```js
solveNQueens(4);
```

Output:
```js
[
  [".Q..",
   "...Q",
   "Q...",
   "..Q."],

  ["..Q.",
   "Q...",
   "...Q",
   ".Q.."]
]
```

Each array is a **board configuration** where:
- `'Q'` is a queen
- `'.'` is an empty square

---

##  How It Works

- Places queens **row by row**
- Uses the `isSafe()` function to check:
  - Vertical threats
  - Left and right diagonal threats
- If safe → place queen → recurse
- If board is full → push the solution
- Uses **backtracking** to explore other possibilities

---

##  Time & Space Complexity

- **Time:** O(N!) — worst-case factorial time due to permutations
- **Space:** O(N²) for board + result

---

##  Notes

- The problem has **no solution for N = 2 or 3**.
- This implementation returns all valid solutions.
- Can be modified to return just **one solution**, or to **count** them.

---
