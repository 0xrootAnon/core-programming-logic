# Merge Two Sorted Arrays

- This function merges two sorted arrays `a` and `b` into a single sorted array.

---

```js
function mergeSorted(a, b) {
  let i = 0, j = 0, result = [];
  // compare elements from both arrays one by one
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      result.push(a[i++]); // push smaller from a[]
    } else {
      result.push(b[j++]); // push smaller from b[]
    }
  }
  // append remaining elements (if any)
  return result.concat(a.slice(i)).concat(b.slice(j));
}
```

---

##  Example

```js
mergeSorted([1, 3, 5], [2, 4, 6]); 
mergeSorted([1, 2], [3, 4, 5]);    
```

---

##  How It Works

- Two pointers (`i` and `j`) track current positions in arrays `a` and `b`.
- Smallest current element is pushed to `result`.
- Once one array is exhausted, the remaining part of the other is concatenated.

---

## ⏱ Time & Space Complexity

- **Time:** O(n + m) where `n` = length of `a`, `m` = length of `b`
- **Space:** O(n + m) — result array stores merged output

---

##  Notes

- Assumes both input arrays are **already sorted**.
- Used in **merge sort** and other divide-and-conquer problems.
- If arrays aren't sorted, sort them first using `.sort()`.

---