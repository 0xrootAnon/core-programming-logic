# Count Vowels and Consonants

- This function counts how many vowels and consonants are present in a given string.

---

```js
function countVowelsConsonants(str) {
  let vowels = 0, consonants = 0;
  const s = str.toLowerCase(); // convert to lowercase to simplify comparison
  for (let char of s) {
    if (/[a-z]/.test(char)) { // check if character is a letter
      if ('aeiou'.includes(char)) vowels++;     // if vowel, increment vowel count
      else consonants++;                        // otherwise, it's a consonant
    }
  }
  return { vowels, consonants }; // return result as an object
}
```

---

## Example

```js
console.log(countVowelsConsonants("Hello World"));
```

## Notes

- Only alphabetic characters are counted.
- Non-letters (digits, punctuation, spaces) are ignored.
- Case-insensitive logic using `.toLowerCase()`.

---

