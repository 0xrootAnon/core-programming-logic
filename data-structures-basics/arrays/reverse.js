//method a: built‑in reverse (mutates)
function reverseBuiltin(arr) {
  return arr.reverse();
}

//method b: copy + reverse (non‑mutating)
function reverseCopy(arr) {
  return [...arr].reverse();
}

//method c: 2 pointer swap
function reverseTwoPointer(arr) {
  let a = 0, b = arr.length - 1;
  const res = [...arr];
  while (a < b) {
    [res[a], res[b]] = [res[b], res[a]];
    a++; b--;
  }
  return res;
}

//method d: reduce
function reverseReduce(arr) {
  return arr.reduce((acc, x) => [x, ...acc], []);
}
