//method 1: simple modulo check
function isDivisibleBy3Or5(n) {
  return n % 3 === 0 || n % 5 === 0;
}

//method 2: loop from 1 to n
function listDivisibleBy3Or5(limit) {
  const result = [];
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) result.push(i);
  }
  return result;
}