/*
Sara Maneval
1/21/2015
SDI Section #3
GoTo Training Day #3
 */

//Use an alert to test if the js file is connected to the HTML

//alert("Testing to see if connected.");

//Check how many pears are in a fruit bowl
//Create out "Fruit bowl"
//Use an array, variable that holds multiple variables

var bowlOfFruit = ["apple","pear","peach"];
console.log(bowlOfFruit);

//Find out how many items are in an array
//length property - items in array
//Dot Syntax -"use a period"
console.log(bowlOfFruit.length);

//Call upon a specific item in the array
console.log(bowlOfFruit[2]);

//Create a variable to hold the total number of pears
var totalNumPears =0;

//if(condition to test){Code that will will run if condition is true}
/*
If Else Statement
if(condition){
    Code to run if condition is true
}else{
    Code to run if condition is false
}
 */

// "6" == 6 TRUE - Only looks at the value
//"6" === 6 FALSE Data type is different
// = is an assignment operator

if (bowlOfFruit[0]=== "peach"){
    //Count the fruit as a peach
    //add one to the total num of pears
    console.log("This is a pear.");
    totalNumPears++; //totalNumPears = totalNumPears +1;

}else {

    //Code to run if not a pear
    console.log("This fruit is not a pear.");
}

//Test the next item in the array


if (bowlOfFruit[1]=== "peach"){
    //Count the fruit as a peach
    //add one to the total num of pears
    console.log("This is a pear.");totalNumPears++;
    //totalNumPears = totalNumPears +1;

}else {

    //Code to run if not a pear
    console.log("This fruit is not a pear.");
}

//Test third item in the array
if (bowlOfFruit[2]=== "peach"){
    //Count the fruit as a peach
    //add one to the total num of pears
    console.log("This is a pear.");totalNumPears++;
    //totalNumPears = totalNumPears +1;

}else {

    //Code to run if not a pear
    console.log("This fruit is not a pear.");
}

//Test the next item in the array

console.log("There are "+ totalNumPears +" pears in the fruit bowl");

//Loop - repetative code

//For Loop
// for (intialize a variable; condition to test; increment of change){ code to run each time the condition is true}
//Create a new variable to hold total of pears
var pearNumber =0;
for (var i =0; i<5; i++){
    console.log("Inside the loop");
    console.log(i);
}

//Using a for loop with an array

for(var j=0; j<bowlOfFruit.length;j++ ){
    //Use j as the index #
    console.log(bowlOfFruit[j]);

    //Test each fruit to see if it is a pear
    if(bowlOfFruit[j] ==="pear"){
        console.log("You found a pear");
        pearNumber++;
    }else{
        //If the fruit is not a pear
        console.log("This is not a pear");
    }

}
console.log("Total number of pears is "+pearNumber);

//Validate prompts
var userInput = prompt("Please type in your name:");
//To make sure that it is not blank

if (userInput===""){
    console.log("Left it blank");


    userInput=prompt("Please dont leave blank. What is your name?");
}

//check if the user types in a number

var age = prompt("Please type in your age:");
//isNaN(to check)- tests to see if it is not a number
//Double negative - becareful

console.log(isNaN("cat"));//returns true
console.log(isNaN(7));//returns false

//test if age is a number

if(isNaN(age)){
    //This means the user typed in a text string and not a number
    //Reprompt for a number
    age=prompt("Please only use numbers.");
}
var userYesNo=prompt("Please type in Yes or no?");
//.toLowerCase ()
//Changes a text string to all lowercase]
userYesNo=userYesNo/toLowerCase();
//Limit to just those choices
if(userYesNo !="yes" && userYesNo !="no"){
    userYesNo=prompt("Only type in yes or no");

}