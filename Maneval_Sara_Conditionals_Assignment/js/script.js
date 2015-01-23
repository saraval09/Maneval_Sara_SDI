/*
Sara Maneval
SDI Section #3
Conditionals Assignment- Sparky's Journey Part 2
1/22/2015
*/

//Continuing from last weeks assignment when Sparky ate 30 slices of pizza and ended up with diabetes, we will continue to see how he is doing by making sure his insulin is now regulated. 

// We need to make sure Sparky only eats two times a day 30-45 minutes after receiving insulin. Sparky needs to get back into shape as well. He should be walked daily to help keep his blood sugar low. 

//alert("This is connected.");



//Prompt for name
var name = prompt("Hello! What is your name?");

//Make sure the user doesn't leave prompt blank

if (name===""){
    console.log("Left it blank");
   name=prompt("I want to know your name please!");
}

//Say hello to the user
alert("Hello "+name+"!" );
console.log("Hello "+name+"!");

//alert the user what is going on and what to expect
alert(name+", Sparky is in need of an overhaul with his health.\nAfter 30 slices of pizza last week we found out he has DIABETES!");
alert('By pressing "OK", you are agreeing that you will help Sparky with his insulin and exercise.');

//Let the user know it is time to feed and give sparky a shot. Ask them which one they should do since they are supposed to take care of him.

var morning = prompt("It is morning and that means it is time to feed Sparky and give him his insulin.\nWhich should Sparky do first? Eat or get a shot?");
    morning=morning.toLowerCase();
//Make sure the user doesnt leave prompt blank
if(morning===""){
    console.log("Left it blank.");
    morning=prompt("You agreed to take care of Sparky! Please answer if he should eat or get a shot first.");

//If the user chooses shot let them know that it is wrong    
}else if (morning==="shot"){
    alert("NO! Do you want Sparky to go into a coma?! He needs to eat and then he gets his shot.");
//If the user chooses eat let them know that it is correct
}else if (morning==="eat"){
    alert("That is correct! Sparky needs his food before he gets his shot!");
//If the user puts anything besides shot and eat let them know they are failing at taking care of Sparky
}else{
 alert ("You had one job. That is to take care of Sparky! You are failing!"); 
}
//Now that the user fed and gave Sparky insulin they need to make sure he exercises
alert("Now that you finally fed poor Sparky and gave him insulin, it is now time to take him for a walk.");

//Ask the user how many miles they walked Sparky if it is more than 2 he will need a nap otherwise he needs more exercise
var walking = prompt("How many miles do you walk with Sparky?");

if(walking===""){
//dont let the user leave the prompt blank
    console.log("Left it blank");
    walking =prompt("I would like to know how many miles please!");
}
//make sure the user only uses numbers with isNaN
if(isNaN(walking)){
    walking=prompt("I would only like to see numbers please!");
}

miles = (walking<=2) ? "Sparky needs more of a workout!" : "Sparky needs a nap!";

alert(miles);
//Have the user decide how they want spoil Sparky with loves or hugs
var goodBoy= prompt("Sparky has been such a good boy today! How do you treat him? Loves or Treats?");
//Make it all lowercase
    goodBoy=goodBoy.toLowerCase();

//Make sure it isnt blank
if (goodBoy==="") {
    goodBoy = prompt("Are you not going to give him anything?\nLoves or Treats?");
}

//Make sure the user can only put "Loves" or "Treats"
if(goodBoy != "Loves" && goodBoy != "Treats"){
    goodBoy= prompt("Only 'Loves' or 'Treats' please.");
}


//Let the user know how good they did with sparky today if they put loves and how bad they are if they put treats.
if(goodBoy==="Loves"){
    alert("Great job being responsible with Sparky today!");
}else if (goodBoy==="Treats"){
    alert ("He is diabetic! No BAD Human!BAD! Give Sparky LOVES!");
}



//Ask user how old they are
var age=prompt(name+", How old are you?");
//Make sure they are using numbers
if (age===""){
    age= prompt("Please put some type of numbers.");
}
if(isNaN(age)){
    age=prompt("Only numbers please...");
}
var sparkysAge= age * 7;

alert(name+ ", Did you know that you are "+ sparkysAge+ " in 'Sparky' Years?");


