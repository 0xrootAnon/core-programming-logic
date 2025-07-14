//longest palindromic substring 

//method: expand around corner
function longestPalindromicSubstring(s) {
  let start = 0, end = 0;
  const expand = (l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--; r++;
    }
    return [l + 1, r - 1];
  };

  for (let i = 0; i < s.length; i++) {
    let [l1, r1] = expand(i, i);     //odd length
    let [l2, r2] = expand(i, i + 1); //even length
    if (r1 - l1 > end - start) [start, end] = [l1, r1];
    if (r2 - l2 > end - start) [start, end] = [l2, r2];
  }
  return s.slice(start, end + 1);
}


