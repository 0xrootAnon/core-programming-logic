# Swapping Two Variables Without Using a Temporary Variable

In programming, we often need to **swap** the values of two variables. While the common approach uses a third (temporary) variable, I've used three clever ways to **swap without using any extra space**. Check in core-programming-logic/medium/numbers/swapWithoutTemp.js

---

## Comparison Table

| Method                  | Uses Extra Space | Risk of Overflow | Works with Decimals | Division by Zero | Easy to Understand |
|-------------------------|------------------|------------------|---------------------|------------------|---------------------|
| Addition / Subtraction  |  No            |  Yes           |  No               |  Safe          |  Yes              |
| Multiplication / Division |  No          |  Yes           |  No               |  Risk          |  Yes              |
| XOR Bitwise             |  No            |  No            |  No               |  Safe          |  Tricky           |
