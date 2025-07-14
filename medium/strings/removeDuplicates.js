//remove duplicate characters 

//method 1: using set
function removeDuplicates(str) {
  return [...new Set(str)].join('');
}

//method 2: loop and lookup 
function removeDuplicatesManual(str) {
  let seen = {};
  let result = '';
  for (let char of str) {
    if (!seen[char]) {
      result += char;
      seen[char] = true;
    }
  }
  return result;
}
