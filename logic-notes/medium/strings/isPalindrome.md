# Palindrome String Check

- This function checks whether a given string is a palindrome, the same forward and backward, while ignoring case and non-alphanumeric characters.

---

```js
// check if a string is a palindrome
function isPalindrome(str) {
  const clean = str
    .toLowerCase()                 // make case-insensitive
    .replace(/[^a-z0-9]/g, '');    // remove all non-alphanumeric characters
  // reverse the cleaned string and compare
  return clean === clean.split('').reverse().join('');
}
```

---

## Example

```js
isPalindrome("A man, a plan, a canal: Panama"); // true
isPalindrome("racecar"); // true
isPalindrome("hello");   // false
```

---

## Notes

- Works for words, phrases, and sentences.
- Ignores spaces, punctuation, and case.
- Useful for string validation problems and coding interviews.

---

