# Divisibility by 3 or 5

- This script checks if a number is divisible by 3 or 5, and also lists all such numbers up to a given limit.

---

```js
// method 1: simple modulo check
function isDivisibleBy3Or5(n) {
  // true if divisible by 3 or 5
  return n % 3 === 0 || n % 5 === 0;
}
```

### Example

```js
isDivisibleBy3Or5(9);  
isDivisibleBy3Or5(10); 
isDivisibleBy3Or5(7);  
```

---

```js
// method 2: list all numbers divisible by 3 or 5 from 1 to limit
function listDivisibleBy3Or5(limit) {
  const result = [];
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result.push(i);
    }
  }
  return result;
}
```

### Example

```js
listDivisibleBy3Or5(15); 
```

---

## Notes

- `%` is the modulo operator; checks remainder.
- Method 1 is for single number check.
- Method 2 generates an array of all such numbers up to a given `limit`.

---