//print multiplication table for a number up to n terms
function printTable(num, upto) {
  for (let i = 1; i <= upto; i++) {
    console.log(`${num} × ${i} = ${num * i}`);
  }
}
