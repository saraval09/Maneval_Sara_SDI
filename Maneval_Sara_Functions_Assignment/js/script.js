/*
Sara Maneval
SDI Section #3
Sparky's Origin
1/29/2015
*/

//alert("This is connected");
//Prompt user for their name
var name = prompt ("Hello! What is your name?");
//re-prompt the user if they leave it blank or put in a number
while(name===""|| !isNaN(name)){
    
   name = prompt("Aww come on don't be like that! I would like to know your name.");
   
}
 console.log("The users name is "+name+".");

alert("Hello, "+name+"! I am back here to ask you more questions about good ole Sparky, The Diabetic Dog!");


//Ask user how many miles they walk Sparky a day
var miles =prompt ("How many miles do walk with Sparky a day?");
//re-prompt the user if they leave it blank or put in a number
while(miles==="" || isNaN(miles)){
    miles = prompt("I would like to know how many MILES you walk Sparky a day please!");
}
console.log(name+" walks Sparky " +miles+ " miles day.");


var times = prompt ("How many times a week do you walk Sparky?");

while (times==="" || isNaN(times)){
    times=prompt("I would like to know how many times you walk Sparky a week PLEASE!");
}
console.log(name+ " walks Sparky " +times+ " times a week.");

var milesAWeek= function (day, week){ 

    var area = day * week;
    return area;

}
var a = milesAWeek (miles,times);

console.log(name+" walks Sparky "+a+" miles a week.");

var sparky= alert("Wow "+name+ "! You walk Sparky "+a+ " miles a week!");