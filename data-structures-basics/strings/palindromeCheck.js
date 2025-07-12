//method a: reverse + compare
function isPalindromeReverse(s) {
  const t = s.split('').reverse().join('');
  return s === t;
}

//method b: 2 pointer scan
function isPalindromeTwoPointer(s) {
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (s[i++] !== s[j--]) return false;
  }
  return true;
}
