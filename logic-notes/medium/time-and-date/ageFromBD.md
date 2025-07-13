#  Calculate Age from Birthdate

- This function calculates a person's current age based on their birthdate string (in formats like `"YYYY-MM-DD"`).

---

```js
// Calculate age from given birthdate string
function calculateAge(birthDateStr) {
  const birthDate = new Date(birthDateStr);       // Parse input into Date object
  const today = new Date();                       // Get today's date
  let age = today.getFullYear() - birthDate.getFullYear();  // Initial age diff
  // Adjust age if birthday hasn't occurred yet this year
  if (
    today.getMonth() < birthDate.getMonth() ||                      // Earlier month
    (today.getMonth() === birthDate.getMonth() &&                  // Same month but...
     today.getDate() < birthDate.getDate())                        // ...day not yet reached
  ) {
    age--;
  }
  return age;
}
```

---

##  Example

```js
console.log(calculateAge("2000-09-15"));  
```

---

##  Logic

1. **Initial age:** Difference between current year and birth year
2. **Adjustment check:** If birthday hasn’t occurred this year, subtract 1
   - Compare month
   - If same month, compare day

---

##  Time Complexity

| Operation | Complexity |
|-----------|------------|
| Date calculations | O(1) |

---

##  Notes

- Input should be in a valid date string format (`YYYY-MM-DD` recommended)
- Automatically accounts for leap years and date overflow

---