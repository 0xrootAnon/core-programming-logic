# Leap Year Check

- This script determines whether a given year is a **leap year** using two common approaches.

---

##  Leap Year Rule

A year is a **leap year** if:
- It is divisible by 4  
  **AND**
  - Not divisible by 100  
  **OR**
  - Divisible by 400

---

##  Method 1: Standard Logical Expression

```js
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
```

### Example

```js
isLeapYear(2000); 
isLeapYear(1900); 
isLeapYear(2024); 
```

---

##  Method 2: Nested If-Else

```js
function isLeapYearNested(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    return true;
  }
  return false;
}
```

### Example

```js
isLeapYearNested(2024); 
isLeapYearNested(2100); 
```

---

##  Notes

- Both methods are correct and produce the same result.
- Method 1 is shorter and ideal for most use cases.
- Method 2 is more readable for beginners and useful in interviews.

---