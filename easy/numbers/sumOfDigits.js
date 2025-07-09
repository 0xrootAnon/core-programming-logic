//Method 1: beginner level
let num = 2006;                                         //providing value as beginners won't be able to take inputs from users (Tutors focus more on Js for web);
let sum = 0;                                            //intitialising var;
while (num>0){                                          //loop which ends when num becomes 0;
    let lastDigit = num%10;                             //extracting last digit from number;
    sum += lastDigit;                                   //adding the last digit to sum=0 so that, 6+0=6+0=6+0=6+2=8;
    num = Math.floor(num/10);                           //math.floor removed decimal digits which in our case will remove the last digit to initialise num to "200", repeating the loop afterwards;
}
console.log(`Sum of digits is ${sum}`);                 //printing result :)

//Method 2: for pros
const readline = require("readline"); //importing inbuilt readline module
const rl = readline.createInterface({ //creating I/O interface named "r1" where r1 is an object
  input: process.stdin, //takes input from keyboard
  output: process.stdout //writes output to terminal
});
rl.question("Enter an integer: ", function(input) { //prompt for input
  input = Number(input); // Convert input to number
  let sum = 0;                      //logic is the same as explained earlier
  while (input > 0) {
    let digit = input % 10;
    sum += digit;
    input = Math.floor(input / 10);
  }
  console.log("Sum of digits is: " + sum);
  rl.close(); //closes the input interface
});
