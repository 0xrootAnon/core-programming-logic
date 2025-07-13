#  String Permutations — Two Methods

- These functions generate **all permutations** of a given string using different techniques.

---

##  Method A: Backtracking (DFS)

```js
function permuteBacktrack(s) {
  const res = [];
  (function dfs(path, used) {
    if (path.length === s.length) {
      res.push(path); // base case: full permutation
      return;
    }
    for (let i = 0; i < s.length; i++) {
      if (used[i]) continue;      // skip already used characters
      used[i] = true;             // mark as used
      dfs(path + s[i], used);     // recurse
      used[i] = false;            // backtrack
    }
  })('', []);
  return res;
}
```

Simple and flexible  
 Time: `O(n!)`, Space: `O(n)` stack

---

##  Method B: Heap’s Algorithm

```js
function permuteHeap(arr) {
  const res = [];
  function generate(n) {
    if (n === 1) {
      res.push(arr.join('')); // base case
    } else {
      for (let i = 0; i < n; i++) {
        generate(n - 1); // generate smaller permutation
        const j = (n % 2) ? 0 : i;
        [arr[j], arr[n - 1]] = [arr[n - 1], arr[j]]; // swap
      }
    }
  }
  generate(arr.length);
  return res;
}
```

Optimized for performance  
 Time: `O(n!)`, In-place swaps

---

##  Examples

```js
permuteBacktrack("abc");
permuteHeap(["a","b","c"]);
```

---
