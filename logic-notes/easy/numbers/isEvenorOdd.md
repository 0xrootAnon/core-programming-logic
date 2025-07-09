# Even/Odd Checker

A simple JavaScript function demonstrating three different methods to determine whether a given number is even or odd.

---

## How It Works

### Method 1 – Modulo Operator (%)

**Logic:** An integer is even if it leaves no remainder when divided by 2.
**Check:** num % 2 === 0 → even; otherwise, odd.

### Method 2 – Last Digit Check

**Logic:** In base-10, even numbers end with 0, 2, 4, 6, or 8.
**Check:** Extract the last digit with num % 10 and test membership in [0, 2, 4, 6, 8].

### Method 3 – Bitwise AND (&)

**Logic:** In binary, even numbers have a least-significant bit (LSB) of 0; odd numbers have LSB = 1.
**Check:** num & 1 === 0 → even; otherwise, odd.

## Why Three Methods?

**Educational:** Illustrates different ways to think about the same problem.
**Performance:** Bitwise operations can be faster in low-level or performance sensitive code.
**Readability:** Modulo and last-digit checks are very intuitive in high-level scripts.