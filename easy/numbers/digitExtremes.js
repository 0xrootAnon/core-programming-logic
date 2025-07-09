//finding largest and smallest digits in a number

    function findExtremes(num){
        num = Math.abs(num);
        let largest = 0;
        let smallest = 9;
            while(num>0){
                let digit = num%10;
                if(digit>largest){
                    largest=digit;
                }
                if(digit<smallest){
                    smallest=digit;
                }
                num = Math.floor(num/10);
            }
        return {largest, smallest};
    }
    console.log(findExtremes(2345));