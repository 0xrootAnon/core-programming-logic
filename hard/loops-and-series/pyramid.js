//complex patterns: print pyramid
function printPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = ' '.repeat(n - i);
    let stars = '* '.repeat(i);
    console.log(spaces + stars.trim());
  }
}
printPyramid(5);
