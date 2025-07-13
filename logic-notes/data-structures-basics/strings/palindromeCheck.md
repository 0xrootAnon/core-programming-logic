#  Palindrome Checker (Two Methods)

- These functions check if a string is a **palindrome** — i.e., it reads the same forward and backward.

---

##  Code

```js
//  Method A: Reverse + Compare
function isPalindromeReverse(s) {
  const t = s.split('').reverse().join(''); // create reversed string
  return s === t; // compare with original
}
```

>  Simple and readable  
>  Uses extra space (`O(n)`)

---

```js
//  Method B: Two Pointer Scan
function isPalindromeTwoPointer(s) {
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (s[i++] !== s[j--]) return false; // mismatch found
  }
  return true; // no mismatches
}
```

>  Space-efficient (`O(1)`)  
>  Fast early exit if mismatch found

---

##  Example

```js
isPalindromeReverse("madam");        
isPalindromeTwoPointer("racecar");   
isPalindromeReverse("hello");        
```

---

