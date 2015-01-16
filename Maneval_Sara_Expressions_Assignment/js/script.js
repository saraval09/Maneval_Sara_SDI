/*
 Sara Maneval
 SDI Section #3
 Expression Assignment
 1/15/2015
 */
//alert("Testing to see if the JS file is attached to the HTML.");


//Ask the user their name
var name = prompt("What is your name?");

console.log(name);

//Greet user and tell them what you are doing
alert("Hello " +name+ "! I have a few questions to ask you about movies.")

//Find out how many movies they see in a theatre a month
var monthlyMovies = prompt("How many movies do you see at a theatre a month?");
console.log(monthlyMovies);

//Find out how much they pay for a movie ticket
var ticketCost = prompt("About how much is the movie ticket?");
console.log(ticketCost);

//Find out how much they spend on snacks
var snackCost = prompt("About how much do you spend on snacks?");
console.log(snackCost);

//Thank them using their name
alert("Thank you for your answers " +name+ "!");

//Let them know what you are doing
alert("I am now calculating about how much you spend monthly at a movie theatre!");

//Give them something fun to read
alert("Almost done! I bet if you click “OK” I will know the answer!");

//Find the out how much they spend by adding the cost of the tickets and snacks and then multiplying them out by how many times they see a movie a month
var totalCost = (ticketCost+snackCost) * monthlyMovies;
console.log(totalCost);

//Let the user know how much they spend at the theatre monthly
alert("You spend "+totalCost+ " monthly at the theatre!");

//Thank the user for their time
alert("Thank you for your time "+name+ "!"+ " " + "Have a wonderful day!");