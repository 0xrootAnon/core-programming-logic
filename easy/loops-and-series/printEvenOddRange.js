//print even or odd numbers in a range 

//method 1: using for loop
let L1 = 1, R1 = 10;
console.log("Even numbers using for loop:");
for (let i = L1; i <= R1; i++) {
  if (i % 2 === 0) console.log(i);
}
console.log("Odd numbers using for loop:");
for (let i = L1; i <= R1; i++) {
  if (i % 2 !== 0) console.log(i);
}

//method 2: using while loop
let L2 = 1, R2 = 10;
let i2 = L2;
console.log("Even numbers using while loop:");
while (i2 <= R2) {
  if (i2 % 2 === 0) console.log(i2);
  i2++;
}
let j2 = L2;
console.log("Odd numbers using while loop:");
while (j2 <= R2) {
  if (j2 % 2 !== 0) console.log(j2);
  j2++;
}

//method 3: using do-while
let L3 = 1, R3 = 10;
let i3 = L3;
console.log("Even numbers using do-while loop:");
do {
  if (i3 % 2 === 0) console.log(i3);
  i3++;
} while (i3 <= R3);
let j3 = L3;
console.log("Odd numbers using do-while loop:");
do {
  if (j3 % 2 !== 0) console.log(j3);
  j3++;
} while (j3 <= R3);

//ethod 5: using recursion
console.log("Even numbers using recursion:");
function printEven(l, r) {
  if (l > r) return;
  if (l % 2 === 0) console.log(l);
  printEven(l + 1, r);
}
printEven(1, 10);
console.log("Odd numbers using recursion:");
function printOdd(l, r) {
  if (l > r) return;
  if (l % 2 !== 0) console.log(l);
  printOdd(l + 1, r);
}
printOdd(1, 10);

//method 5: optimized loop(skipping 2)
let L5 = 1, R5 = 10;
console.log("Even numbers using optimized step:");
let evenStart = L5 % 2 === 0 ? L5 : L5 + 1;
for (let i = evenStart; i <= R5; i += 2) {
  console.log(i);
}
console.log("Odd numbers using optimized step:");
let oddStart = L5 % 2 !== 0 ? L5 : L5 + 1;
for (let i = oddStart; i <= R5; i += 2) {
  console.log(i);
}

