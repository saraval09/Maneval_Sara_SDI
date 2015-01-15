/*
Sara Maneval
SDI Section #3
Expression Worksheet- Average Shopping Bill
1/15/2015
 */

//You are budgeting your money for the year and must calculate your average weekly grocery shopping spending over the past five weeks. Store the past five grocery totals as a list in an array. Create an expression that will use the items in the array to calculate the average amount spent on groceries.
var week1= 100
var week2= 180
var week3= 95
var week4= 106
var week5= 160
var totalCost= week1+week2+week3+week4+week5;
var averageCost = [totalCost/5];
console.log("You have spent a total of $" + totalCost + " on groceries over 5 weeks." + " "+ "That is an average of $" + averageCost + " per week.");
