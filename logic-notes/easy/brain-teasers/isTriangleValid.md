# Triangle Validity Check

- This function checks whether three side lengths can form a valid triangle based on the triangle inequality rule.

---

```js
// check if a triangle is valid: sum of any 2 sides must be greater than the 3rd
function isTriangleValid(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}
```

---

## Example

```js
isTriangleValid(3, 4, 5); 
isTriangleValid(1, 2, 3); 
```

---

## Notes

- Based on the **triangle inequality theorem**
- Works for any positive numeric side lengths
- Does not check for non-positive or non-numeric input (can be added if needed)

---
