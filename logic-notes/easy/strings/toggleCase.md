# Toggle Case (Upper <=> Lower)

- This function converts each character of a string from uppercase to lowercase and vice versa.

---

```js
function toggleCase(str) {
  return [...str] // convert string to array of characters
    .map(char =>
      // if char is uppercase, convert to lowercase; else convert to uppercase
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join(''); // join the transformed characters back into a string
}
console.log(toggleCase("hello")); 
```

---

## Notes

- `"hello"` becomes `"HELLO"`
- `"HeLLo123"` becomes `"hEllO123"`
- Non-alphabet characters (like numbers, symbols) remain unchanged

---