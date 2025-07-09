//finding largest and smallest digits in a number

    function findExtremes(num){
        num = Math.abs(num);    //converting num to positive to gnore -ve sign if present
        let largest = 0;    //initialized largest as 0 as its the min possible digit
        let smallest = 9;   //initialized smallest as 9 as its the max possible digit
            while(num>0){   
                let digit = num%10; //collecting the last digit
                if(digit>largest){  //if > 0 so far, we'll update largest
                    largest=digit;
                }
                if(digit<smallest){ //if < 9 so far, we'll update smallest
                    smallest=digit;
                }
                num = Math.floor(num/10);   //removing the last digit
            }
        return {largest, smallest}; //return results in an object
    }
    console.log(findExtremes(2345));