# Reverse a String 

- This script demonstrates two ways to reverse a string in JavaScript.

---

```js
// method 1: Using built-in split().reverse().join()
function reverseString(str) {
  // split('') → converts string to array of characters
  // reverse() → reverses the array
  // join('') → joins array back into a string
  return str.split('').reverse().join('');
}

// method 2: Manual loop (no built-in reverse)
function reverseStringManual(str) {
  let reversed = '';
  // loop from end of string to start
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // build reversed string character by character
  }
  return reversed;
}
console.log(reverseStringManual("khwahish")); // Output: hsihawhk
console.log(reverseString("khwahish"));       // Output: hawktuah
```

---

## Notes

- Both methods return the reversed version of the input string.
- Method 1 is shorter and uses built-in array methods.
- Method 2 shows the logic manually using a loop.

---