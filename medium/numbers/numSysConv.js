
//decimal to binary/octal/hexadecimal (using built in f(x))
const decimal = 255;
console.log("Decimal to Binary:", decimal.toString(2)); 
console.log("Decimal to Octal:", decimal.toString(8));   
console.log("Decimal to Hex:", decimal.toString(16));    

//binary to decimal (method 1: built in)
const binary = "1010";
console.log("Binary to Decimal (parseInt):", parseInt(binary, 2)); 

//binary to decimal (method 2: Manual logic)
// Multiply each bit from left to right by 2 and accumulate
function binaryToDecimal(bin) {
  let result = 0;
  for (let i = 0; i < bin.length; i++) {
    result = result * 2 + Number(bin[i]); // Shifts left and adds current digit
  }
  return result;
}
console.log("Binary to Decimal (manual):", binaryToDecimal("1010")); 

//decimal to binary (Manual logic)
function decimalToBinary(n) {
  let result = '';
  while (n > 0) {
    result = (n % 2) + result; // prepend remainder (reversed binary)
    n = Math.floor(n / 2);
  }
  return result || "0"; // handle case when n = 0
}
console.log("Decimal to Binary (manual):", decimalToBinary(10)); 

//binary to hexadecimal
const binVal = "11110000";
const hexVal = "f0";
console.log("Binary to Hex:", parseInt(binVal, 2).toString(16)); 
console.log("Hex to Binary:", parseInt(hexVal, 16).toString(2)); 

//octal to decimal
console.log("Octal to Decimal:", parseInt("377", 8)); 
console.log("Decimal to Octal:", (255).toString(8));  

//octal to binary
const octal = "377";
const binNum = "11111111";
console.log("Octal to Binary:", parseInt(octal, 8).toString(2)); 
console.log("Binary to Octal:", parseInt(binNum, 2).toString(8)); 

//hex to decimal
console.log("Hex to Decimal:", parseInt("1a", 16)); 
console.log("Decimal to Hex:", (26).toString(16)); 

//recursive decimal to binary
function decToBinRec(n) {
  if (n === 0) return '';
  return decToBinRec(Math.floor(n / 2)) + (n % 2); // build string in reverse
}
console.log("Decimal to Binary (recursion):", decToBinRec(10)); 
