#  Anagram Checker

These functions check whether two strings are **anagrams** — i.e., whether one can be rearranged to form the other.

---

##  Code

```js
//  Method A: Sort + Compare
function isAnagramSort(a, b) {
  return a.length === b.length &&
         a.split('').sort().join('') === b.split('').sort().join('');
}
```

>  Fast, concise, and works well for small strings  
>  Slower for large strings due to sorting (`O(n log n)`)

---

```js
//  Method B: Frequency Map
function isAnagramMap(a, b) {
  if (a.length !== b.length) return false;
  const freq = {};
  for (let ch of a) freq[ch] = (freq[ch] || 0) + 1;
  for (let ch of b) {
    if (!freq[ch]) return false;
    freq[ch]--;
  }
  return true;
}
```

>  Efficient `O(n)` solution  
>  Works better for large strings without sorting  
>  Builds character counts from one string and matches them in the other

---

##  Example

```js
isAnagramSort("listen", "silent");    
isAnagramMap("triangle", "integral"); 
isAnagramSort("abc", "def");          
```

---