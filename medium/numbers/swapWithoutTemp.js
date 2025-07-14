//swapping without using a third variable

//method 1: using add & subtract
let a = 5;
let b = 7;
a = a + b;  // a = 12
b = a - b;  // b = 5 (original a)
a = a - b;  // a = 7 (original b)
console.log("a =", a);  
console.log("b =", b);  

//method 2: using multiplication and devision
let c = 8;
let d = 2;
c = c * d;  // c = 16
d = c / d;  // d = 8
c = c / d;  // c = 2
console.log("c =", c);  
console.log("d =", d);  

//method 3: using bitwise xor
let e = 5; // binary: 0101
let f = 7; // binary: 0111
e = e ^ f;  // e = 0101 ^ 0111 = 0010 (2)
f = e ^ f;  // f = 0010 ^ 0111 = 0101 (5)
e = e ^ f;  // e = 0010 ^ 0101 = 0111 (7)
console.log("e =", e); 
console.log("f =", f); 