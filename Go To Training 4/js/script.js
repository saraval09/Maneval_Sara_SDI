/*
Sara Maneval
SDI Section #3
Go To Training 4
1/28/2015
*/

//alert("This is connected");

//Create a file that gives us a random number between two numbers

//Ask the user for a min number

var min = prompt("Let's find a random number between two numbers.\nPlease enter a minimum number:");

//Validate that user prompt
/*
Old way of doing it was
if (min===""|| isNaN(min)){
    //reprompt the user
    min=prompt ("Please do not leave blank and only use numbers.");
}
 */
//isNaN() - is Not a Number - double negative
//console.log(isNaN("cat")); //returns true- text strings return true
//console.log(isNaN(7)); // returns false -numbers return false

//New way of validating is with while loops

while(min===""|| isNaN(min)){
    //re-prompt the user
    min = prompt("Please do not leave blank and only use numbers!\nPlease type in min value:");
}