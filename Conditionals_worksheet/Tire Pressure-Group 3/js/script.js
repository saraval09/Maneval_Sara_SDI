/*
Sara Maneval
SDI Section #3
Conditionals_worksheet_Tire Pressure
1/21/2015
*/


//To meet to maintenance standards a car’s front two tires should have the same pressure and the back two tires should have the same pressure.  But the front tires and the rear tires can have different pressure than each other, so it is not necessary for all four tires’ pressure to be the same. Create a single conditional that would determine if the tires of a given car are up to spec. 

var frontA= 25;
var frontB= 35;
var backA= 40;
var backB= 40;

if( frontA ===frontB && backA ===backB) {
   console.log("The tires pass spec!");

}else{
   console.log("Get your tires check out!");
}