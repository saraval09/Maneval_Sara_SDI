/*
Sara Maneval
SDI Section #3
Sparky's Legacy
1/29/2015
*/

//alert("This is connected");

function title (){
        alert("Sparky's Legacy Continues");
}
title();
//Prompt user for their name
var name = prompt ("Hello! What is your name?");
//re-prompt the user if they leave it blank or put in a number
while(name===""|| !isNaN(name)){
    
   name = prompt("Aww come on don't be like that! I would like to know your name.");
   
}
 console.log("The users name is "+name+".");

alert("Hello, "+name+"! I am back here to ask you more questions about good ole Sparky, The Diabetic Dog!");


//Ask user how many miles they walk Sparky a day
var miles =prompt ("How many miles do you walk with Sparky a day?");
//re-prompt the user if they leave it blank or put in a number
while(miles==="" || isNaN(miles)){
    miles = prompt("I would like to know how many MILES you walk Sparky a day please!");
}
console.log(name+" walks Sparky " +miles+ " miles day.");

//Ask user how many times a week they walk Sparky a day
var times = prompt ("How many times a week do you walk Sparky?");
//re-prompt the user if they leave it blank or put in a number

while (times==="" || isNaN(times)){
    times=prompt("I would like to know how many times you walk Sparky a week PLEASE!");
}
console.log(name+ " walks Sparky " +times+ " times a week.");
//calculate how many miles a week the user walks Sparky
var milesAWeek= function (day, week){ 

    var i = day * week;
    return i;

}
var a = milesAWeek (miles,times);

console.log(name+" walks Sparky "+a+" miles a week.");

//Let the user know how many miles a week
var sparky= alert("Wow "+name+ "! You walk Sparky "+a+ " miles a week!");

alert("Ok "+name+ ", now that the small talk is out of the way, I want to learn more about Sparky and his background.");
//Ask user how old Sparky is
var sparkyAge = prompt("How old is Sparky?");
//re-prompt the user if they leave it blank or put in a number
while (sparkyAge==="" || isNaN(sparkyAge)){
    sparkyAge=prompt("Please give me Sparky's AGE.");
}
console.log ("Sparky is "+sparkyAge+" years old.");
//Ask the user if they got him as a puppy
var kid = prompt("Did you get him as a puppy?");
//re-prompt the user if they didnt specifically put "yes" or "no"
kid=kid.toLowerCase();
while(kid!="yes" && kid !="no"){
   
    kid=prompt("Just a simple answer 'Yes' or 'No'.");
}

console.log(name+ " said " +kid+ " to getting Sparky as a puppy.");

//Ask the user if Sparky has any cat friends
var cat= prompt ("Does Sparky have any cat friends?");
//re-prompt the user if they didnt specifically put "yes" or "no"
cat=cat.toLowerCase();
while(cat!="yes" && cat !="no"){
   
    cat=prompt("Just a simple answer 'Yes' or 'No'.");
}
console.log(name+" said "+cat+" to having cat friends");

//Ask the user if Sparky has any dog friends
var dog= prompt ("Does Sparky have any dog friends?");
//re-prompt the user if they didnt specifically put "yes" or "no"
dog=dog.toLowerCase();
while(dog!="yes" && dog !="no"){
   
    dog=prompt("Just a simple answer 'Yes' or 'No'.");
}
console.log(name+" said "+dog+" to having dog friends");

//Ask the user if Sparky has any other animal friends
var animals= prompt ("Does Sparky have any other animal friends?");
//re-prompt the user if they didnt specifically put "yes" or "no"
animals=animals.toLowerCase();
while(animals!="yes" && animals !="no"){
   
    animals=prompt("Just a simple answer 'Yes' or 'No'.");
}
console.log(name+" said "+animals+" to having other animal friends");

//Put all of the answers together about Sparkys friends

var allFriends= function (animal1, animal2, animal3){ 

    var everyone = "You said "+animal1+" to Sparky having cat friends, "+animal2+" to having dog friends, and " +animal3+ " to having any other animal friends. Hopefully Sparky is never bored!"
    return everyone;
    

}
var alltogether = allFriends (cat,dog,animals);
console.log(alltogether);
//Show the user what they wrote all together for Sparkys friends
alert(alltogether);
//Let the user know you learned a lot by concatenating all of the answers together
alert("Wow! I learned a lot about Sparky today!\nThank you for ALL of your answers!\nI can't believe that Sparky is " +sparkyAge+" years old!\nAnd you said " +kid+" to getting him as a puppy!\nCant forget that you walk him "+a+" times a week!");
      
alert("Until next time!");

function title (){
        alert("Sparky's Legacy Will Continue");
}
title();
      
      