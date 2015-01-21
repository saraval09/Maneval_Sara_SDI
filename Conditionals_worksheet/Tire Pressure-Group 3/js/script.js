/*
Sara Maneval
SDI Section #3
Conditionals_worksheet_Tire Pressure
1/21/2015
*/


//To meet to maintenance standards a car’s front two tires should have the same pressure and the back two tires should have the same pressure.  But the front tires and the rear tires can have different pressure than each other, so it is not necessary for all four tires’ pressure to be the same. Create a single conditional that would determine if the tires of a given car are up to spec. 


var mpg =25 ;
var gauge =.50;
var tank=15;
var left= tank*gauge;


if(mpg*left-200<=200){
    console.log("You only have "+ left + " gallons of gas in your tank, better get gas now while you can!");
}else{
    console.log("Yes, you can make it without stopping for gas!");
}

