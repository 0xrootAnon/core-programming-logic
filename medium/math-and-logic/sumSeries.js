//method 1: looping
function harmonicSeries(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 1 / i;
  }
  return sum;
}

//method 2: arr nd reduce
function harmonicReduce(n) {
  return [...Array(n).keys()].reduce((acc, val) => acc + 1 / (val + 1), 0);
}