//method 1: using for loop
let n1 = 10;
for (let i = 1; i <= n1; i++) {
  console.log(i);
}

//method 2: using while loop
let i2 = 1;
let n2 = 10;
while (i2 <= n2) {
  console.log(i2);
  i2++;
}

//method 3: using do-while loop
let i3 = 1;
let n3 = 10;
do {
  console.log(i3);
  i3++;
} while (i3 <= n3);

//method 4: using recursion
function printNums(i, n) {
  if (i > n) return;
  console.log(i);
  printNums(i + 1, n);
}
printNums(1, 10);
