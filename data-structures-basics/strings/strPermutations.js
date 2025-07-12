//method a: backtracking
function permuteBacktrack(s) {
  const res = [];
  (function dfs(path, used) {
    if (path.length === s.length) {
      res.push(path);
      return;
    }
    for (let i = 0; i < s.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      dfs(path + s[i], used);
      used[i] = false;
    }
  })('', []);
  return res;
}

//method b: heap’s algorithm
function permuteHeap(arr) {
  const res = [];
  function generate(n) {
    if (n === 1) {
      res.push(arr.join(''));
    } else {
      for (let i = 0; i < n; i++) {
        generate(n - 1);
        const j = (n % 2) ? 0 : i;
        [arr[j], arr[n - 1]] = [arr[n - 1], arr[j]];
      }
    }
  }
  generate(arr.length);
  return res;
}
