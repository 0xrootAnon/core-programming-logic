# Convert Seconds to Hours:Minutes:Seconds (H:M:S)

- This function converts a total number of seconds into a readable format of hours, minutes, and seconds.

---

```js
// convert total seconds to hours:minutes:seconds
function convertSecondsToHMS(seconds) {
  const hrs = Math.floor(seconds / 3600);            // 1 hour = 3600 seconds
  const mins = Math.floor((seconds % 3600) / 60);     // remaining minutes
  const secs = seconds % 60;                          // remaining seconds
  return `${hrs}h ${mins}m ${secs}s`; // format the result
}
```

---

## Example

```js
convertSecondsToHMS(3665); 
convertSecondsToHMS(7320); 
```

---

## Notes

- `Math.floor()` ensures whole numbers for hours and minutes.
- Useful in applications like timers, clocks, and video duration converters.
- Customizable format (e.g., `"01:02:03"` or `"01h 02m 03s"`) can be implemented if needed.

---
