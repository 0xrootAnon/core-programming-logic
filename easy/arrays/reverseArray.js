//Reverse an array 

//method 1: built-in
function reverseUsingBuiltIn(arr) {
  return [...arr].reverse(); // non-mutating
}

//method 2: 2 pointer swap
function reverseTwoPointer(arr) {
  let res = [...arr], left = 0, right = res.length - 1;
  while (left < right) {
    [res[left], res[right]] = [res[right], res[left]];
    left++;
    right--;
  }
  return res;
}
