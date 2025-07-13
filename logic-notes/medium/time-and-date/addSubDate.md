#  Add / Subtract Days from a Date

- This snippet shows how to **add** or **subtract** a number of days from a given date using JavaScript's built-in `Date` object.

---

```js
// Add a specific number of days to a date
function addDays(dateStr, days) {
  const date = new Date(dateStr);               // Parse string to Date object
  date.setDate(date.getDate() + days);          // Add days using setDate + getDate
  return date.toDateString();                   // Convert back to readable format
}
// Subtract days by passing negative number to addDays
function subtractDays(dateStr, days) {
  return addDays(dateStr, -days);
}
```

---

##  Example

```js
console.log(addDays("2025-07-13", 10));      
console.log(subtractDays("2025-07-13", 5));  
```

---

##  Logic

- `new Date(dateStr)` creates a `Date` object from a string
- `.getDate()` gets the day of the month
- `.setDate(current + days)` moves the date forward or backward
- Result is returned using `.toDateString()` for clean output

---

##  Notes

- Works for valid ISO date strings (e.g. `"2025-07-13"`)
- Automatically handles month/year rollovers
- You can replace `.toDateString()` with `.toISOString()` or `.toLocaleDateString()` based on your needs

---

##  Time Complexity

| Operation | Complexity |
|-----------|------------|
| Parsing + Math | O(1) |

---

