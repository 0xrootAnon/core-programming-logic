//method a: sort + compare
function isAnagramSort(a, b) {
  return a.length === b.length &&
         a.split('').sort().join('') === b.split('').sort().join('');
}

//method b: frequency map
function isAnagramMap(a, b) {
  if (a.length !== b.length) return false;
  const freq = {};
  for (let ch of a) freq[ch] = (freq[ch] || 0) + 1;
  for (let ch of b) {
    if (!freq[ch]) return false;
    freq[ch]--;
  }
  return true;
}
