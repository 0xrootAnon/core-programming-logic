# Get Current Date and Time

- This function retrieves the current system date and time using JavaScript's built-in `Date` object.

---

```js
// get current date and time in multiple formats
function getCurrentDateTime() {
  const now = new Date(); // create a new Date object with current timestamp
  return {
    date: now.toLocaleDateString(),  // returns in local date format (e.g. "7/13/2025")
    time: now.toLocaleTimeString(),  // returns in local time format (e.g. "4:42:17 PM")
    iso: now.toISOString()           // returns ISO 8601 format (e.g. "2025-07-13T11:12:17.123Z")
  };
}
```

---

## Example Output

```js
{
  date: "7/13/2025",
  time: "4:42:17 PM",
  iso: "2025-07-13T11:12:17.123Z"
}
```

---

## Notes

- `toLocaleDateString()` and `toLocaleTimeString()` give output based on the user's system locale.
- `toISOString()` gives a standardized date-time string in UTC (useful for logs/APIs).
- Can be expanded to custom formats using `.getDate()`, `.getMonth()`, `.getFullYear()`, etc.

---