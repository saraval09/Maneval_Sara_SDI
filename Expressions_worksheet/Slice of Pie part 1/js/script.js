/*
Sara Maneval
SDI Section #3
Expression Worksheet- Slice of Pie Part 1
1/15/2015
 */

//A bunch of students are having a party and somebody ordered pizza. Create an expression that calculates how much pizza each partygoer will get at the party.  (Assume all pizzas have the same number of slices and that the person dividing the pizza is really precise, so this can be a decimal, like 3.52 slices, etc.)


var pizzaSlices = 10;
var partyGoers = 55;
var pizzas = 25
var totalSlices= pizzas * pizzaSlices / partyGoers;
console.log("The 'party goers' will get to eat " + totalSlices + " at the party!");