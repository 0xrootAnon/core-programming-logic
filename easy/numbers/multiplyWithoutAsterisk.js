// multiplying without asterisk
    function prodWithoutprod(a,b){
        const isNeg = (a<0) !== (b<0); //checking if any of a or b is -ve (affects the result)
        a=Math.abs(a);  //converting both to positive for repititive addition
        b=Math.abs(b);  
        let product = 0;
            for(let i = 0; i < b; i++){ //add 'a' to 'product', 'b' number of times
                product = product+a;
            }
            if (isNeg){     //if res should be -ve, apply sign
                product = -product;
            }
            return product;
    }
    console.log(prodWithoutprod(4, 3));   
    console.log(prodWithoutprod(-4, 3));   
    console.log(prodWithoutprod(-4, -3));  