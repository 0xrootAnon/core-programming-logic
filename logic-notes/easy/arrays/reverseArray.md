# Reverse an Array 

- This script reverses the order of elements in an array using two different approaches.

---

## Method 1: using buolt-in reverse()

```js
function reverseUsingBuiltIn(arr) {
  return [...arr].reverse(); // use spread to avoid modifying original array
}
```

### Example

```js
reverseUsingBuiltIn([1, 2, 3, 4]); 
```

---

## Method 2: 2 ptr technique [manual revrse]

```js
function reverseTwoPointer(arr) {
  let res = [...arr];              // make a copy to avoid mutation
  let left = 0, right = res.length - 1;
  while (left < right) {
    // swap elements at left and right indices
    [res[left], res[right]] = [res[right], res[left]];
    left++;
    right--;
  }
  return res;
}
```

### Example

```js
reverseTwoPointer([1, 2, 3, 4]); // Output: [4, 3, 2, 1]
```

---

## Notes

- Both methods return a **new reversed array**.
- Method 1 is shorter and uses built-in utilities.
- Method 2 is useful in interviews to demonstrate pointer logic and avoid built-ins.

---
