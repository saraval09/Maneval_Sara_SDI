/*
Sara Maneval
SDI Section #3
Functions vs Procedures
1/27/2015
*/

//alert("This is connected");

//this is a function
function calcAreaF(){
    var area = width * height;
    return area;
}

//This is a procedure
function calcAreaP(width, height){
    var area = width * height;
    console.log(area); //no return
}
    