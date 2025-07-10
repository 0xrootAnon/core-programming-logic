//precompute  smallest prime factor (SPF) for all numbers up to maxLimit
function computeSPF(maxLimit) {
  const spf = Array(maxLimit + 1).fill(0);  // spf[i] will store the smallest prime factor of i
  for (let i = 2; i <= maxLimit; i++) {
    if (spf[i] === 0) { // if i is prime
      for (let j = i; j <= maxLimit; j += i) {
        if (spf[j] === 0) spf[j] = i; // mark smallest prime factor for j
      }
    }
  }
  return spf;
}

//use precomputed SPF to factorize any number <= maxLimit in O(log n) time
function getPrimeFactors(n, spf) {
  const factors = [];
  while (n > 1) {
    factors.push(spf[n]);  // get smallest prime factor
    n = Math.floor(n / spf[n]);
  }
  return factors;
}
//testing;-
const max = 1000000; //choosing a max limit for precomputation
const spf = computeSPF(max);
console.log(getPrimeFactors(60, spf)); 
console.log(getPrimeFactors(75, spf)); 
