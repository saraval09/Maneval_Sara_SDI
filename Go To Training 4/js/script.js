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

//Prompt the user for a max number
//do while loop

/*
do{
code to run
}while(condition to test);
*/

do {
    //runs at least once
    //prompt the user
    var max = prompt("Please enter a max value");
}while(max==="" || isNaN(max));

//Create a function that will give us a random number
/*
function functionName (Parameters){
    code goes in here
}
 */
function randomizer(minNum, maxNum){

    //math.random()*(max number - min number) + min number
    var randomNumber = Math.round(Math.random()*(maxNum - minNum) + Number(minNum));
    console.log(randomNumber);
}
//Function call starts the function running
//Pit in arguments to send into the function
randomizer(min,max);