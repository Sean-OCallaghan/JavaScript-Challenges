console.log("Hello")
// alert("Hello this is sean")

//Variables
var b ="smoothie";
console.log(b);

var someNumber = 45;
console.log(someNumber);

//Change HTML in Java Script

// var age = prompt('What is your age');

// document.getElementById('someText').innerHTML=age;



//Numbers in JavaScript
var num1 = 5.7;
num1--;
num1++;
console.log(5 * num1)

/*Functions
1. Create a Function
2. Call a Function
*/
//Create
function fun() {
    //healert('this is a function')
}
//Call
fun();

/* Lets create a function that takes in a name
and says hello followed by your name
*/

function greeting(yourName){
    var result = 'Hello ' + yourName;
    console.log(result);
}
//var name = prompt('What is your name? ');
greeting(name);

// How do Arguments work in functions?
// How do we add two numbers together in a function

function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result);
}
sumNumbers(10,10);


//While Loops
var num = 0

while( num < 100){
    num+=1;
    console.log(num);
}




