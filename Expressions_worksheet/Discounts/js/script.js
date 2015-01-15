/*
Sara Maneval
SDI Section #3
Expression Worksheet- Discounts
1/15/2015
*/

//Calculate the discounted price for an item. Create an expression that will calculate the discounted price with and without sales tax. (It is acceptable for the result to have more than two digits after the decimal. $345.896 for example.)

//alert ("This is correct");

var sweater = 50;
var discount = .15;
var discountTotal = sweater * discount;
var sweaterSale=  sweater - discountTotal;
var tax = sweaterSale * .06;
var total= sweaterSale + tax;

console.log("Your sweater was originally $" + sweater + ","+" " + "but after a " + discount + "% discount, it is now $" + sweaterSale+ " without tax, and $" + total + " with tax.");

