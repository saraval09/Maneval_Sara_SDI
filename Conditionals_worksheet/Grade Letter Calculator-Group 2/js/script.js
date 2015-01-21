/*
Sara Maneval
SDI Section #3
Conditionals_worksheet_Grade Letter Calculator
1/21/2015
*/


//A student earns a number grade at the conclusion of a course at Full Sail.  Determine the appropriate letter grade for that number using conditional statements.


var mpg =25 ;
var gauge =.50;
var tank=15;
var left= tank*gauge;


if(mpg*left-200<=200){
    console.log("You only have "+ left + " gallons of gas in your tank, better get gas now while you can!");
}else{
    console.log("Yes, you can make it without stopping for gas!");
}

