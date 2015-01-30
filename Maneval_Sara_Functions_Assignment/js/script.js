/*
Sara Maneval
SDI Section #3
Sparky's Legacy
1/29/2015
*/

//alert("This is connected");
//Prompt user for their name
function title (){
        alert("Sparky's Legacy Continues");
}
title();

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

    var i = day * week;
    return i;

}
var a = milesAWeek (miles,times);

console.log(name+" walks Sparky "+a+" miles a week.");

var sparky= alert("Wow "+name+ "! You walk Sparky "+a+ " miles a week!");

alert("Ok "+name+ ", now that the small talk is out of the way, I want to learn more about Sparky and his background.");

var sparkyAge = prompt("How old is Sparky?");
while (sparkyAge==="" || isNaN(sparkyAge)){
    sparkyAge=prompt("Please give me Sparky's AGE.");
}
console.log ("Sparky is "+sparkyAge+" years old.");

var kid = prompt("Did you get him as a puppy?");

kid=kid.toLowerCase();
while(kid!="yes" && kid !="no"){
   
    kid=prompt("Just a simple answer 'Yes' or 'No'.");
}

console.log(name+ " said " +kid+ " to getting Sparky as a puppy.");

var cat= prompt ("Does Sparky have any cat friends?");

cat=cat.toLowerCase();
while(cat!="yes" && cat !="no"){
   
    cat=prompt("Just a simple answer 'Yes' or 'No'.");
}
console.log(name+" said "+cat+" to having cat friends");

var dog= prompt ("Does Sparky have any dog friends?");

dog=dog.toLowerCase();
while(dog!="yes" && dog !="no"){
   
    dog=prompt("Just a simple answer 'Yes' or 'No'.");
}
console.log(name+" said "+dog+" to having dog friends");

var animals= prompt ("Does Sparky have any other animal friends?");

animals=animals.toLowerCase();
while(animals!="yes" && animals !="no"){
   
    animals=prompt("Just a simple answer 'Yes' or 'No'.");
}
console.log(name+" said "+animals+" to having other animal friends");


var allFriends= function (animal1, animal2, animal3){ 

    var everyone = "You said "+animal1+" to Sparky having cat friends, "+animal2+" to having dog friends, and " +animal3+ " to having any other animal friends. Hopefully Sparky is never bored!"
    return everyone;
    

}
var alltogether = allFriends (cat,dog,animals);
console.log(alltogether);

alert(alltogether);

alert("Wow! I learned a lot about Sparky today! Thank you for ALL of your answers! I can't believe that Sparky is " +sparkyAge+" years old! And you said " +kid+" to getting him as a puppy. Cant forget that you walk him "+a+" times a week!");
      
alert("Until next time!");

function title (){
        alert("Sparky's Legacy Continues");
}
title();
      
      