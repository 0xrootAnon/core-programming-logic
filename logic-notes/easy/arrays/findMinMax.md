# Find Largest and Smallest Element in an Array 

- This script finds the minimum and maximum values in an array using both manual logic and built-in JavaScript methods.

---

## Method 1: manual loop

```js
function findMinMax(arr) {
  let min = arr[0], max = arr[0]; // initialize with first element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i]; // update min if current is smaller
    if (arr[i] > max) max = arr[i]; // update max if current is larger
  }
  return { min, max }; // return both values as an object
}
```

### Example

```js
findMinMax([4, 1, 9, -2, 7]); 
```

---

## Method 2: using inbuilt math f(x)

```js
function findMinMaxUsingMath(arr) {
  return {
    min: Math.min(...arr), // spread array into arguments
    max: Math.max(...arr)
  };
}
```

### Example

```js
findMinMaxUsingMath([4, 1, 9, -2, 7]); 
```

---

## Notes

- **Method 1** gives full control and is useful in environments without spread or `Math` functions.
- **Method 2** is cleaner and more concise.
- Both return an object with `min` and `max` keys.

---
