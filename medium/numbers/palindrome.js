function findPalindrome(input) {
    if (!isNaN(input)) {    //NaN stands for "not a number", '!NaN' verifies if the input is a number or not
        let original = Number(input); //convert input to num if it's passed as string
        let num = original;
        let reversed = 0;
            while (num > 0) {   //this while loop reverses the number
            let lastDigit = num % 10;
            reversed = reversed * 10 + lastDigit;
            num = Math.floor(num / 10);
        }
        return reversed === original;   //returhn true if reversed number = actual input
    }else if (typeof input === "string") {
        let str = input.toLowerCase().trim();   //converting to lowercase in case any letter is capital or else we'll have problems when comparing
        let reversed = str.split("").reverse().join("");    //reverse the string
        return reversed === str;
    }else {     //if input wasnt a number or string
        return "Allowed inputs: number or string only";
    }
}
console.log(findPalindrome(121));       
console.log(findPalindrome(-121));      
console.log(findPalindrome("RaceCar")); 
