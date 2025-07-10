#  Number System Conversions

This document demonstrates multiple ways to convert between number systems (binary, decimal, octal, and hexadecimal) using both **built-in** and **manual logic** with Js as done in numSysConv.js

---

### DECIMAL TO BINARY / OCTAL / HEX

**Convert a decimal number into binary, octal, and hexadecimal using built-in `toString(base)`**

```js
const decimal = 255;
console.log("Decimal to Binary:", decimal.toString(2));  // .toString(2): Converts decimal to binary (base 2) // Output: "11111111"
console.log("Decimal to Octal:", decimal.toString(8));   // .toString(8): Converts decimal to octal (base 8) // Output: "377"
console.log("Decimal to Hex:", decimal.toString(16));    // .toString(16): Converts decimal to hexadecimal (base 16) // Output: "ff"
```

---

### BINARY TO DECIMAL (Method 1)

```js
const binary = "1010";
console.log("Binary to Decimal (parseInt):", parseInt(binary, 2));  // parseInt(binaryStr, 2) parses a binary string to decimal // Output: 10
```
---

### DECIMAL TO BINARY (Manual Logic)

```js
function decimalToBinary(n) {
  let result = '';
  while (n > 0) {
    result = (n % 2) + result; // Get remainder (0 or 1) and prepend
    n = Math.floor(n / 2);     // Divide by 2 (integer division)
  }
  return result || "0"; // Edge case: if n = 0
}
console.log("Decimal to Binary (manual):", decimalToBinary(10));  // Output: 1010
```

---

### BINARY TO DECIMAL (Manual Logic)

```js
function binaryToDecimal(bin) {
  let result = 0;
  for (let i = 0; i < bin.length; i++) {
    result = result * 2 + Number(bin[i]);     // Multiply result by 2 (binary shift left)    // Add current digit (0 or 1)
  }
  return result;
}
console.log("Binary to Decimal (manual):", binaryToDecimal("1010")); // Output: 10
```
---

### BINARY TO HEXADECIMAL & REVERSE

```js
const binVal = "11110000"; // Binary string (F0)
const hexVal = "f0";       // Hexadecimal string (F0)
console.log("Binary to Hex:", parseInt(binVal, 2).toString(16)); 
// Step 1: Convert binary to decimal using parseInt(..., 2)
// Step 2: Convert decimal to hex using .toString(16)
// Output: "f0"
console.log("Hex to Binary:", parseInt(hexVal, 16).toString(2)); 
// Step 1: Convert hex to decimal using parseInt(..., 16)
// Step 2: Convert decimal to binary using .toString(2)
// Output: "11110000"
```
---

### OCTAL TO DECIMAL & REVERSE

```js
console.log("Octal to Decimal:", parseInt("377", 8));  // parseInt("377", 8): Octal "377" to Decimal → 255
console.log("Decimal to Octal:", (255).toString(8));  // 255 → "377" (Octal)
```

---

### OCTAL TO BINARY & REVERSE

```js
const octal = "377";       // Octal representation of 255
const binNum = "11111111"; // Binary representation of 255
console.log("Octal to Binary:", parseInt(octal, 8).toString(2)); 
// Step 1: Octal to Decimal → Step 2: Decimal to Binary
// Output: "11111111"
console.log("Binary to Octal:", parseInt(binNum, 2).toString(8)); 
// Step 1: Binary to Decimal → Step 2: Decimal to Octal
// Output: "377"
```

---

### HEX TO DECIMAL & REVERSE

```js
console.log("Hex to Decimal:", parseInt("1a", 16));  // "1a" (hex) = 26 (decimal)
console.log("Decimal to Hex:", (26).toString(16));  // 26 (decimal) = "1a" (hex)
```

---

### RECURSIVE DECIMAL TO BINARY

```js
function decToBinRec(n) {
  if (n === 0) return "0"; // Edge case
  if (n === 1) return "1"; // Base case
  return decToBinRec(Math.floor(n / 2)) + (n % 2);   // Recursively divide by 2, appending remainder
}
console.log("Decimal to Binary (recursion):", decToBinRec(10)); // Output: 1010
```
---

##  Summary of Conversions Covered

| From → To         | Method(s) Used                          |
|-------------------|------------------------------------------|
| Decimal → Binary  | `toString(2)`, loop, recursion           |
| Decimal → Octal   | `toString(8)`                            |
| Decimal → Hex     | `toString(16)`                           |
| Binary → Decimal  | `parseInt(..., 2)`, manual logic         |
| Binary → Octal    | Binary → Decimal → Octal                 |
| Binary → Hex      | Binary → Decimal → Hex                   |
| Octal → Decimal   | `parseInt(..., 8)`                       |
| Octal → Binary    | Octal → Decimal → Binary                 |
| Hex → Decimal     | `parseInt(..., 16)`                      |
| Hex → Binary      | Hex → Decimal → Binary                   |
