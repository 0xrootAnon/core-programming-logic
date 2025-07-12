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
