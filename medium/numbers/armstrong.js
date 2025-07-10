//A number `n` is an Armstrong number if: abc... = a^d + b^d + c^d + ... (where d = total digits)
function isArmstrong(num) {
    const original = num;
    const digits = num.toString().length;  // number of digits
    let sum = 0;
    while (num > 0) {
        const digit = num % 10;
        sum += Math.pow(digit, digits);    // raise each digit to power of digit count
        num = Math.floor(num / 10);        // remove last digit
    }
    return sum === original;
}
console.log(isArmstrong(153));   
console.log(isArmstrong(9474));  
console.log(isArmstrong(123));   

// To print All Armstrong Numbers in a Range:-
function printArmstrongInRange(start, end) {
    for (let i = start; i <= end; i++) {
        if (isArmstrong(i)) {
            console.log(i);
        }
    }
}
printArmstrongInRange(1, 1000); 