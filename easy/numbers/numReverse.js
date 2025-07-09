//Method 1: using mathematical logic
let myNum = 9876;
let reverse = 0;
    while (myNum>0){
        let lastDigit = myNum%10;
        reverse = reverse * 10 + lastDigit;
        myNum = Math.floor(myNum / 10);
    }
console.log(`Reversed number: ${reverse}`);

//Method 2: using a function
function reverseNumber(num) {
    let str = num.toString();
    let rev = "";
    for (let i=0; i<str.length; i++){
        rev = str[i] + rev;
    }
    return parseInt(rev);
}
console.log(reverseNumber(1234));
