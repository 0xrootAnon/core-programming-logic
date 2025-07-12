//Substring count / pattern search (Brute force) 

function countSubstring(str, pattern) {
  let count = 0;
  for (let i = 0; i <= str.length - pattern.length; i++) {
    if (str.substring(i, i + pattern.length) === pattern) count++;
  }
  return count;
}
