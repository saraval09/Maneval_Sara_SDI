/*
Sara Maneval
SDI Section #3
Expression Worksheet- Slice of Pie Part 2
1/15/2015
 */

//At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have been divided up evenly among the guests. Assume guests get whole slices, how many whole slices will Sparky feast on?

var pizzaSlices = 10;
var partyGoers = 55;
var pizzas = 25
var sparkySlices= pizzas * pizzaSlices % partyGoers;

console.log("Sparky gets " + sparkySlices + " slices of pizza at the party!"+ " " + "Sparky was later diagnosed with diabetes." );