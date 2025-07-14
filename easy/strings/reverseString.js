//reversing strings

//method 1: Using split().reverse().join()
function reverseString(str) {
  return str.split('').reverse().join('');
}

//method 2: manual loop
function reverseStringManual(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseStringManual("khwahish"));
console.log(reverseString("khwahish"));