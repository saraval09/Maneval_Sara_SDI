/*
Sara Maneval
SDI Section #3
Stung!
1/27/2015
*/

//alert("This is connected");

//It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function.


function stings(animal){
    
    var stings= animal / 8.666666667;
    
    console.log("It takes "+stings+ " bee stings to kill this animal" );
}

stings(250);
stings(450);
stings(650);  