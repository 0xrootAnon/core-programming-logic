//counting number of digits in a given number
    function countIt(num){ //creating fx with argument 'num'
        num = Math.abs(num);    //math.abs ensures that number is positive
        if (num===0){ //if number = 0, 0 is a one  digit number
            return 1; //so we return 1
        }
        let count = 0; //initial digit count is 0
        while (num > 0){    //keep dividing the number by 10 till it  becomes 0
            count++;    //incrreases digit count whenever the loop starts
            num = Math.floor(num/10); //everytime we divide, we remove the last digit
        }
        return count; // return count as it holds the total number of digits
    }
console.log(countIt(9754736487547956746534759635937605386937));