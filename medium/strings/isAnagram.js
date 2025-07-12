//Anagram check 

//method 1: sort and compare
function isAnagram(a, b) {
  const format = s => s.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
  return format(a) === format(b);
}

//method 2; frequency count
function isAnagramMap(a, b) {
  if (a.length !== b.length) return false;
  const freq = {};
  for (let char of a) freq[char] = (freq[char] || 0) + 1;
  for (let char of b) {
    if (!freq[char]) return false;
    freq[char]--;
  }
  return true;
}

