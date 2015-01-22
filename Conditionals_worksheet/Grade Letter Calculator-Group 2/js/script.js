/*
Sara Maneval
SDI Section #3
Conditionals_worksheet_Grade Letter Calculator
1/21/2015
*/


//A student earns a number grade at the conclusion of a course at Full Sail.  Determine the appropriate letter grade for that number using conditional statements.


var grade= 97;


//Test what grade- norma

//A- 100-90
//B- 89-80
//C 79-70
//D 69-60
//F 59- 0

if(grade>90){
    console.log("You have a "+grade+"%, which means you have earned a(n) A in the class!");

}else if (grade>80){
    console.log("You have a "+grade+"%, which means you have earned a(n) B in the class!");

}else if (grade>70){
    console.log("You have a "+grade+"%, which means you have earned a(n) C in the class!");
}else if (grade>60){
    console.log("You have a "+grade+"%, which means you have earned a(n) D in the class!");
}else {
    console.log("You have a "+grade+"%, which means you have earned a(n) F in the class!");
}