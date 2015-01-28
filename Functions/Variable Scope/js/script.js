/*
Sara Maneval
SDI Section #3
Variable Scope
1/27/2015
*/

//alert("This is connected");

var width = 5;

function calcArea() {
    var width = 20;
    var height =30;
    var area  = width * height;
    //console.log(area);
}

calcArea();
console.log(width);