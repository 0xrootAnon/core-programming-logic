//strong num (sum of factorial of digits == number)
function isStrongNumber(n) {
  const fact = [1];
  for (let i = 1; i <= 9; i++) fact[i] = fact[i - 1] * i;

  let sum = 0, temp = n;
  while (temp > 0) {
    sum += fact[temp % 10];
    temp = Math.floor(temp / 10);
  }
  return sum === n;

}
//perfect num (sum of proper divisors == number)
function isPerfectNumber(n) {
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) sum += i;
  }
  return sum === n;
}
