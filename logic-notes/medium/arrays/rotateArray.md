# Array Rotation: Left & Right (by 1 or k steps)

- These functions perform left and right rotations on arrays using slicing and concatenation.

---

```js
// Left Rotate by 1
function leftRotate(arr) {
  // Move the first element to the end
  return arr.slice(1).concat(arr[0]);
}
```

### Example

```js
leftRotate([1, 2, 3, 4]); 
```

---

```js
// Right Rotate by 1
function rightRotate(arr) {
  // Move the last element to the front
  return [arr[arr.length - 1], ...arr.slice(0, arr.length - 1)];
}
```

### Example

```js
rightRotate([1, 2, 3, 4]); 
```

---

```js
// Left Rotate by k steps
function leftRotateByK(arr, k) {
  k = k % arr.length; // handle overflow
  return arr.slice(k).concat(arr.slice(0, k));
}
```

### Example

```js
leftRotateByK([1, 2, 3, 4, 5], 2); 
```

---

## Notes

- `slice(start, end)` creates a subarray without modifying original array.
- All rotations here return **new arrays** (non-mutating).
- For **in-place rotations**, use loop or reversal techniques.

---