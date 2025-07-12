//remove duplicates from array 

//method 1: using set
function removeDuplicatesSet(arr) {
  return [...new Set(arr)];
}

//method 2: using map
function removeDuplicatesManual(arr) {
  const seen = {}, result = [];
  for (let num of arr) {
    if (!seen[num]) {
      result.push(num);
      seen[num] = true;
    }
  }
  return result;
}
