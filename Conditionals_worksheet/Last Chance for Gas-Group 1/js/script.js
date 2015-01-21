/*
Sara Maneval
SDI Section #3
Conditionals_worksheet_Last Chance For Gas
1/21/2015
*/


//A driver has to determine if they can make it across the desert with their current fuel.  They are about to past the last gas station for the next 200 miles and they need to determine whether they should stop now for gas or not.


var mpg =25 ;
var gauge =.50;
var tank=15;
var left= tank*gauge;


if(mpg*left-200<=200){
    console.log("You only have "+ left + " gallons of gas in your tank, better get gas now while you can!");
}else{
    console.log("Yes, you can make it without stopping for gas!");
}

