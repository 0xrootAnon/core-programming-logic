function checkEvenOdd(num){
    console.log(`/n Checking Even/Odd for: ${num}`);
    //method 1: using modulo
    if (num%2 === 0){
        console.log(`${num} is even.`);
    } else {
        console.log(`${num} is odd.`);
    }
    //method 2:last digit check
    const lastDigit = num%10;
    if ([0,2,4,6,8].includes(lastDigit)){
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
    //method 3: last bit check using bitwise &
    if ((num & 1)=== 0){
        console.log(`${num} is even`);
    } else{
        console.log(`${num} is odd`);
    }
}
checkEvenOdd(65674795);

