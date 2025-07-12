//e.g. problem: Find (x, y) such that 2x + 3y = 18

function solveEquation(limit) {
  const solutions = [];
  for (let x = 0; x <= limit; x++) {
    for (let y = 0; y <= limit; y++) {
      if (2 * x + 3 * y === 18) {
        solutions.push({ x, y });
      }
    }
  }
  return solutions;
}
