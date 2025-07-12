//conveerting case i.e. upper<=>lower

function toggleCase(str) {
  return [...str].map(char =>
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
  ).join('');
}
console.log(toggleCase("hello"));